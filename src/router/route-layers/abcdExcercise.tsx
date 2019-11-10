import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';

import { ABCD_EXCECISE_PATH } from '../paths';

const AbcdExcerciseRouterLayer = (props: RouteComponentProps) => {
  return (
    <Switch>
      <Route path={props.match.url + ABCD_EXCECISE_PATH.CREATE} exact></Route>
      <Route path={props.match.url + ABCD_EXCECISE_PATH.RANDOM} exact></Route>
      <Route path={props.match.url + ABCD_EXCECISE_PATH.SPECIFIC} exact></Route>
      <Route path={props.match.url + ABCD_EXCECISE_PATH.EDIT} exact></Route>

      <Redirect path="" exact to={props.match.url}></Redirect>
    </Switch>
  );
};
export default AbcdExcerciseRouterLayer;
