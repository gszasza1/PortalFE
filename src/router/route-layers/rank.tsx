import React, { lazy, Suspense } from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';

import { RANK_PATH } from '../paths';

const RankSelector = lazy(() => import("../../pages/rank/selector/component"));
const AgeRankForm = lazy(() => import("../../pages/rank/age/connect"));
const ScoreRankForm = lazy(() => import("../../pages/rank/score/connect"));

const RankRouterLayer = (props: RouteComponentProps) => {
  return (
    <Suspense fallback={<div className="fallback" />}>
      <Switch>
        <Route
          path={props.match.url + RANK_PATH.SELECTOR}
          exact={true}
          render={() => <RankSelector />}
        />
        <Route
          path={props.match.url + RANK_PATH.AGE}
          exact={true}
          render={() => <AgeRankForm />}
        />
        <Route
          path={props.match.url + RANK_PATH.SCORE}
          exact={true}
          render={() => <ScoreRankForm />}
        />
        <Redirect
          path=""
          exact={true}
          to={props.match.url + RANK_PATH.SELECTOR}
        />
      </Switch>
    </Suspense>
  );
};
export default RankRouterLayer;
