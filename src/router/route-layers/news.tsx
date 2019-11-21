import React, { lazy, Suspense } from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';

import { NEWS_PATH } from '../paths/news';

const GeneralNewsPage = lazy(() => import("../../pages/news/component"));
const NewsList = lazy(() => import("../../pages/news/list/connect"));
const CreateNewsForm = lazy(() => import("../../pages/news/create/connect"));
const EditNewsForm = lazy(() => import("../../pages/news/edit/component"));
const SingleNews = lazy(() => import("../../pages/news/single-news/connect"));

const NewsRouterLayer = (props: RouteComponentProps) => {
  return (
    <Suspense fallback={<div className="fallback" />}>
      <Switch>
        <Route
          path={props.match.url + NEWS_PATH.GENERAL}
          exact={true}
          render={() => <GeneralNewsPage {...props} />}
        />
        <Route
          path={props.match.url + NEWS_PATH.LIST}
          exact={true}
          render={() => <NewsList {...props} />}
        />
        <Route
          path={props.match.url + NEWS_PATH.CREATE}
          exact={true}
          render={() => <CreateNewsForm />}
        />
        <Route
          path={props.match.url + NEWS_PATH.EDIT}
          exact={true}
          render={props => <EditNewsForm {...props} />}
        />
        <Route
          path={props.match.url + NEWS_PATH.SINGLE}
          exact={true}
          render={routeProps => <SingleNews {...routeProps} />}
        />
        <Redirect path="" exact={true} to={props.match.url + NEWS_PATH.LIST} />
      </Switch>
    </Suspense>
  );
};
export default NewsRouterLayer;
