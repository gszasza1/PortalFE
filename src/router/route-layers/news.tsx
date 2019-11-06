import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';

import { NewsForm } from '../../pages/news/form/component';
import ScoreRankForm from '../../pages/rank/score/connect';
import { NEWS_PATH } from '../paths/news';

const NewsRouterLayer = (props: RouteComponentProps) => {
  return (
    <Switch>
      <Route path={props.match.url + NEWS_PATH.CREATE} exact>
        <NewsForm></NewsForm>
      </Route>
      <Route path={props.match.url + NEWS_PATH.EDIT} exact>
        <ScoreRankForm></ScoreRankForm>
      </Route>
      <Redirect
        path=""
        exact
        to={props.match.url + NEWS_PATH.CREATE}
      ></Redirect>
    </Switch>
  );
};
export default NewsRouterLayer;
