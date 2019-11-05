import React, { Suspense } from "react";
import { Fallback } from "../../constant/fallback";
import { Route, Redirect, Switch } from "react-router";
import Login from "../../pages/login/connect";
import { BASE_PATHS } from "../paths/base";
import { AuthProps } from "./connect";
import { AuthorizedLayer } from "./authorizedLayers";

const PublicPage = React.lazy(() =>
  import("../../pages/public-page/component")
);
const Register = React.lazy(() => import("../../pages/register/connect"));

interface Props extends AuthProps {}
export class RouteLayerUnconnected extends React.Component<Props> {
  render() {
    return (
      <Suspense
        fallback={
          <div className="fallback">
            <Fallback></Fallback>
          </div>
        }
      >
        <Switch>
          <Route
            path={BASE_PATHS.PUBLICPAGE}
            component={PublicPage}
            exact
            {...this.props}
          ></Route>

          <Route path={BASE_PATHS.REGISTER} component={Register}></Route>
          <Route path={BASE_PATHS.LOGIN} component={Login}></Route>
          {this.props.isConnected && (
            <Route to={BASE_PATHS.AUTH} component={AuthorizedLayer}></Route>
          )}
          <Redirect push from="*" to={BASE_PATHS.PUBLICPAGE} />
        </Switch>
      </Suspense>
    );
  }
}
