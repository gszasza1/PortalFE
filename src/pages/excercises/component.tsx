import * as React from "react";

import { RouteComponentProps } from "react-router";
import ExcerciseRouterLayer from "../../router/route-layers/excercise";

export const Excercises = (props: RouteComponentProps<{}>) => {
  const { ...rest } = props;
  return <ExcerciseRouterLayer {...rest}></ExcerciseRouterLayer>;
};
