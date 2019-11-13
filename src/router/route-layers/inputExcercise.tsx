import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';

import { CreateInputExcerciseForm } from '../../pages/excercises/input-answer/create/connect';
import { EditInputExcerciseForm } from '../../pages/excercises/input-answer/edit/connect';
import { GeneralInputExcercise } from '../../pages/excercises/input-answer/general/connect';
import { Random } from '../../pages/excercises/input-answer/random';
import { INPUT_EXCECISE_PATH } from '../paths';

const InputExcerciseRouterLayer = (props: RouteComponentProps) => {
  return (
    <Switch>
      <Route path={props.match.url + INPUT_EXCECISE_PATH.CREATE} exact>
        <CreateInputExcerciseForm {...props}></CreateInputExcerciseForm>
      </Route>
      <Route path={props.match.url + INPUT_EXCECISE_PATH.RANDOM} exact>
        <Random></Random>
      </Route>

      <Route
        path={props.match.url + INPUT_EXCECISE_PATH.EDIT}
        exact
        component={EditInputExcerciseForm}
      ></Route>
      <Route
        path={props.match.url + INPUT_EXCECISE_PATH.GENERAL}
        exact
        component={GeneralInputExcercise}
      ></Route>
      <Redirect
        from={props.match.url + "/edit"}
        exact
        to={props.match.url}
      ></Redirect>
      <Route
        path={props.match.url + INPUT_EXCECISE_PATH.SPECIFIC}
        exact
      ></Route>
      <Redirect path="" exact to={props.match.url}></Redirect>
    </Switch>
  );
};
export default InputExcerciseRouterLayer;
