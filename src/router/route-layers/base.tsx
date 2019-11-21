import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Login from '../../pages/login/connect';
import PublicPage from '../../pages/public-page/component';
import Register from '../../pages/register/connect';
import { BASE_PATHS } from '../paths/base';
import { AuthorizedLayer } from './authorizedLayers';
import { AuthProps } from './connect';

interface Props extends AuthProps {}
export class RouteLayerUnconnected extends React.Component<Props> {
  render() {
    return (
      <Switch>
        <Route
          path={BASE_PATHS.PUBLICPAGE}
          component={PublicPage}
          exact
        ></Route>

        <Route path={BASE_PATHS.REGISTER} component={Register}></Route>
        <Route path={BASE_PATHS.LOGIN} component={Login}></Route>
        {this.props.isConnected && (
          <Route path={BASE_PATHS.AUTH} component={AuthorizedLayer}></Route>
        )}
        <Redirect to={BASE_PATHS.PUBLICPAGE} />
        <Redirect push from="*" to={BASE_PATHS.PUBLICPAGE} />
      </Switch>
    );
  }
}
