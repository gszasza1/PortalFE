import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';

import { EXCECISE_PATH } from '../paths';
import AbcdExcerciseRouterLayer from './abcdExcercise';
import InputExcerciseRouterLayer from './inputExcercise';

const ExcerciseList = React.lazy(() =>
  import("../../pages/excercises/default-type-list/component")
);

const ExcerciseRouterLayer = (props: RouteComponentProps) => {
  return (
    <Switch>
      <Route
        path={props.match.url + EXCECISE_PATH.INPUT}
        {...props}
        component={InputExcerciseRouterLayer}
      ></Route>
      <Route path={props.match.url + EXCECISE_PATH.ABCD}>
        <AbcdExcerciseRouterLayer {...props}></AbcdExcerciseRouterLayer>
      </Route>

      <Route path={props.match.url + EXCECISE_PATH.TESZT} exact></Route>
      <Route path={props.match.url + EXCECISE_PATH.LIST} exact>
        <ExcerciseList {...props}></ExcerciseList>
      </Route>
      <Redirect path="" exact to={props.match.url}></Redirect>
    </Switch>
  );
};
export default ExcerciseRouterLayer;
