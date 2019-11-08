import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';

import { GAME_PATH } from '../paths';

const BombSeeker = React.lazy(() =>
  import("../../pages/games/bombseeker/component")
);

const GameRouterLayer = (props: RouteComponentProps) => {
  return (
    <Switch>
      <Route path={props.match.url + GAME_PATH.BOMBSEEKER} exact>
        <BombSeeker></BombSeeker>
      </Route>

      <Redirect
        path=""
        exact
        to={props.match.url + GAME_PATH.BOMBSEEKER}
      ></Redirect>
    </Switch>
  );
};
export default GameRouterLayer;
