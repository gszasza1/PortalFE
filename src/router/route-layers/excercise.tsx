import { Route, RouteComponentProps } from "react-router";
import React from "react";
import { EXCECISE_PATH } from "../paths";

const ExcerciseList = React.lazy(() =>
  import("../../pages/excercises/default-type-list/component")
);
const ABCD = React.lazy(() => import("../../pages/excercises/abcd/connect"));
const InputAnswer = React.lazy(() =>
  import("../../pages/excercises/input-answer/connect")
);

const ExcerciseRouterLayer = (props: RouteComponentProps) => {
  return (
    <>
      <Route
        path={props.match.url + EXCECISE_PATH.ABCD}
        exact
        component={ABCD}
      ></Route>
      <Route
        path={props.match.url + EXCECISE_PATH.LIST}
        exact
        component={ExcerciseList}
      ></Route>
      <Route
        path={props.match.url + EXCECISE_PATH.INPUTNUMBER}
        exact
        component={InputAnswer}
      ></Route>
    </>
  );
};
export default ExcerciseRouterLayer;
