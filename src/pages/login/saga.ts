import { put, takeEvery, all, call } from "redux-saga/effects";
import {
  LoginPostData,
  postLoginDataSuccess,
  postLoginDataError,
  LoginPostActionTypes,
  IPostLoginRequest,
  IPostLogin
} from "./actions/login.post";
import axios from "axios";
import { BaseUrl } from "../../config/api";
import qs from "qs";
import { getCheckloginData } from "../../user/actions/checkLogin.get";
function* handlePostRequest(action: IPostLoginRequest) {
  try {
    const caller: LoginPostData = yield call(
      beginToLogin,
      action.params.userName,
      action.params.password
    );
    yield put(postLoginDataSuccess(caller));
    yield put(getCheckloginData({ currentUrl: "" }));
  } catch (err) {
    yield put(postLoginDataError(err));
  }
}

export function* postLogin() {
  yield takeEvery(LoginPostActionTypes.POST_REQUEST, handlePostRequest);
}

export function* watchLogin() {
  yield all([call(postLogin)]);
}

const beginToLogin = (name: string, password: string): Promise<IPostLogin> => {
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
    }
  };

  const requestBody = qs.stringify({
    username: name,
    password: password,
    client_id: "portal_client",
    client_secret: "portal_client_secret",
    scope: "offline_access portal_api",
    grant_type: "password"
  });
  const url = BaseUrl + "/connect/token";

  const resp = axios
    .post(url, requestBody, config)
    .then(response => {
      const access_token =
        response.data.token_type + " " + response.data.access_token;
      const refresh_token = response.data.refresh_token;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem(
        "access_token_not_bearer",
        response.data.access_token
      );
      localStorage.setItem("refresh_token", refresh_token);

      axios.defaults.headers.common["Authorization"] = localStorage.getItem(
        "access_token"
      );
      return response;
    })
    .catch(error => {
      return error;
    });
  return resp;
};
