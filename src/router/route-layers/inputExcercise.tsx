import React, { lazy, Suspense } from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';

import { INPUT_EXCECISE_PATH } from '../paths';

const Random = lazy(() =>
  import("../../pages/excercises/input-answer/random/connect")
);
const CreateInputExcerciseForm = lazy(() =>
  import("../../pages/excercises/input-answer/create/connect")
);
const EditInputExcerciseForm = lazy(() =>
  import("../../pages/excercises/input-answer/edit/connect")
);
const GeneralInputExcercise = lazy(() =>
  import("../../pages/excercises/input-answer/general/connect")
);

const InputExcerciseRouterLayer = (props: RouteComponentProps) => {
  return (
    <Suspense fallback={<div className="fallback" />}>
      <Switch>
        <Route
          path={props.match.url + INPUT_EXCECISE_PATH.CREATE}
          exact={true}
          render={() => <CreateInputExcerciseForm />}
        />
        <Route
          path={props.match.url + INPUT_EXCECISE_PATH.RANDOM}
          exact={true}
          render={() => <Random />}
        />

        <Route
          path={props.match.url + INPUT_EXCECISE_PATH.EDIT}
          exact={true}
          component={EditInputExcerciseForm}
          render={() => <EditInputExcerciseForm {...props} />}
        />
        <Route
          path={props.match.url + INPUT_EXCECISE_PATH.GENERAL}
          exact={true}
          render={() => <GeneralInputExcercise {...props} />}
        />
        <Redirect
          from={props.match.url + "/edit"}
          exact={true}
          to={props.match.url}
        />
        <Route
          path={props.match.url + INPUT_EXCECISE_PATH.SPECIFIC}
          exact={true}
        />
        <Redirect path="" exact={true} to={props.match.url} />
      </Switch>
    </Suspense>
  );
};
export default InputExcerciseRouterLayer;
