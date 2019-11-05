import { RouteComponentProps, Route } from "react-router";
import React from "react";
import { AUTH_PATH } from "../paths/auth";
import ExcerciseRouterLayer from "./excercise";

export const AuthorizedLayer = (props: RouteComponentProps<{}>) => {
  console.log("authLayeren vagyok", props);
  return (
    <>
      <Route
        path={props.match.url + AUTH_PATH.EXCERCISES}
        exact
        component={ExcerciseRouterLayer}
      ></Route>
    </>
  );
};
