import React from 'react';
import { Route, RouteComponentProps } from 'react-router';

import { AUTH_PATH } from '../paths/auth';
import ExcerciseRouterLayer from './excercise';
import NewsRouterLayer from './news';
import RankRouterLayer from './rank';

export const AuthorizedLayer = (props: RouteComponentProps<{}>) => {
  return (
    <>
      <Route
        path={props.match.url + AUTH_PATH.EXCERCISES}
        {...props}
        component={ExcerciseRouterLayer}
      ></Route>
      <Route
        path={props.match.url + AUTH_PATH.RANK}
        {...props}
        component={RankRouterLayer}
      ></Route>
      <Route
        path={props.match.url + AUTH_PATH.NEWS}
        {...props}
        component={NewsRouterLayer}
      ></Route>
    </>
  );
};
