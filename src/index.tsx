import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { configureStore } from "./config/ConfigureStore";
import { App } from "./connect";
import axios from "axios";
import qs from "qs";
import { BaseUrl } from "./config/api";
const history = createBrowserHistory({ basename: "/" });
const { store } = configureStore(history);
axios.defaults.headers.common = {
  Authorization: localStorage.getItem("access_token"),
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  "Content-Type": "application/json"
};

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  async function(error) {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        }
      };

      const requestBody = qs.stringify({
        refresh_token: localStorage.getItem("refresh_token"),
        client_id: "undersea_client",
        client_secret: "undersea_client_secret",
        scope: "offline_access undersea_api",
        grant_type: "refresh_token"
      });
      const url = BaseUrl + "connect/token";
      const tokeninstance = axios.create();

      tokeninstance
        .post(url, requestBody, config)
        .then(res => {
          console.log(res);

          localStorage.setItem("access_token", "Bearer " + res.data.token);
          localStorage.setItem("refresh_token", res.data.refreshToken);
          tokeninstance.defaults.headers.common["Authorization"] =
            "Bearer " + res.data.token;
          originalRequest.headers["Authorization"] = "Bearer " + res.data.token;
          return axios(originalRequest);
        })
        .catch(err => {
          console.log(err);
        });
    }
    return Promise.reject(error);
  }
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
