import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';

import ExcerciseList from '../../pages/excercises/default-type-list/component';
import { EXCECISE_PATH } from '../paths';
import AbcdExcerciseRouterLayer from './abcdExcercise';
import InputExcerciseRouterLayer from './inputExcercise';

const ExcerciseRouterLayer = (props: RouteComponentProps) => {
  return (
    <Switch>
      <Route
        path={props.match.url + EXCECISE_PATH.INPUT}
        {...props}
        component={InputExcerciseRouterLayer}
      />
      <Route path={props.match.url + EXCECISE_PATH.ABCD}>
        <AbcdExcerciseRouterLayer {...props} />
      </Route>

      <Route path={props.match.url + EXCECISE_PATH.TESZT} exact={true} />
      <Route path={props.match.url + EXCECISE_PATH.LIST} exact={true}>
        <ExcerciseList {...props} />
      </Route>
      <Redirect path="" exact={true} to={props.match.url} />
    </Switch>
  );
};
export default ExcerciseRouterLayer;
