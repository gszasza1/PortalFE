import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';

import AgeRankForm from '../../pages/rank/age/connect';
import ScoreRankForm from '../../pages/rank/score/connect';
import { RankSelector } from '../../pages/rank/selector/component';
import { RANK_PATH } from '../paths';

const RankRouterLayer = (props: RouteComponentProps) => {
  return (
    <Switch>
      <Route path={props.match.url + RANK_PATH.SELECTOR} exact>
        <RankSelector></RankSelector>
      </Route>
      <Route path={props.match.url + RANK_PATH.AGE} exact>
        <AgeRankForm></AgeRankForm>
      </Route>
      <Route path={props.match.url + RANK_PATH.SCORE} exact>
        <ScoreRankForm></ScoreRankForm>
      </Route>
      <Redirect
        path=""
        exact
        to={props.match.url + RANK_PATH.SELECTOR}
      ></Redirect>
    </Switch>
  );
};
export default RankRouterLayer;
