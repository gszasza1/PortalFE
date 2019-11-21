import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';

import { ABCD_EXCECISE_PATH } from '../paths';

const AbcdExcerciseRouterLayer = (props: RouteComponentProps) => {
  return (
    <Switch>
      <Route path={props.match.url + ABCD_EXCECISE_PATH.CREATE} exact={true} />
      <Route path={props.match.url + ABCD_EXCECISE_PATH.RANDOM} exact={true} />
      <Route
        path={props.match.url + ABCD_EXCECISE_PATH.SPECIFIC}
        exact={true}
      />
      <Route path={props.match.url + ABCD_EXCECISE_PATH.EDIT} exact={true} />

      <Redirect path="" exact={true} to={props.match.url} />
    </Switch>
  );
};
export default AbcdExcerciseRouterLayer;
