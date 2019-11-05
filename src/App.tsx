import "./App.scss";
import { Header } from "./components/header";
import React from "react";
import { Footer } from "./components/footer/component";
import { LoginProps } from "./connect";
import { RouteLayer } from "./router/route-layers/connect";

interface Props extends LoginProps {}
export default class AppUnconnected extends React.Component<Props> {
  componentDidMount() {
    this.props.checkLoggedin({ currentUrl: window.location.pathname });
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="main-component">
          <RouteLayer></RouteLayer>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
