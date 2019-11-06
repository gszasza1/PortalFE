import { Route, RouteComponentProps, Redirect, Switch } from "react-router";
import React from "react";
import { RANK_PATH } from "../paths";
import AgeRankForm from "../../pages/rank/age/connect";
import ScoreRankForm from "../../pages/rank/score/connect";

const RankRouterLayer = (props: RouteComponentProps) => {
  return (
    <Switch>
      <Route path={props.match.url + RANK_PATH.AGE} exact>
        <AgeRankForm></AgeRankForm>
      </Route>
      <Route path={props.match.url + RANK_PATH.SCORE} exact>
        <ScoreRankForm></ScoreRankForm>
      </Route>
      <Redirect path="" exact to={props.match.url + RANK_PATH.AGE}></Redirect>
    </Switch>
  );
};
export default RankRouterLayer;
