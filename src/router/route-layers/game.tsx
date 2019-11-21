import React, { Suspense } from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';

import { GAME_PATH } from '../paths';

const BombSeeker = React.lazy(() =>
  import("../../pages/games/bombseeker/component")
);

const GameRouterLayer = (props: RouteComponentProps) => {
  return (
    <Suspense fallback={<div className="fallback" />}>
      <Switch>
        <Route path={props.match.url + GAME_PATH.BOMBSEEKER} exact={true}>
          <BombSeeker />
        </Route>
        <Route path={props.match.url + GAME_PATH.LIST} exact={true}>
          <BombSeeker />
        </Route>
        <Redirect
          path=""
          exact={true}
          to={props.match.url + GAME_PATH.BOMBSEEKER}
        />
      </Switch>
    </Suspense>
  );
};
export default GameRouterLayer;
