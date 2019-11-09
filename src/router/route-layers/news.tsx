import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';

import { CreateNewsForm } from '../../pages/news/create/connect';
import { EditNewsFormConnected } from '../../pages/news/edit/connect';
import { NewsList } from '../../pages/news/list/connect';
import SingleNews from '../../pages/news/single-news/connect';
import { NEWS_PATH } from '../paths/news';

const NewsRouterLayer = (props: RouteComponentProps) => {
  return (
    <Switch>
      <Route path={props.match.url + NEWS_PATH.LIST} exact>
        <NewsList></NewsList>
      </Route>
      <Route path={props.match.url + NEWS_PATH.CREATE} exact>
        <CreateNewsForm></CreateNewsForm>
      </Route>
      <Route path={props.match.url + NEWS_PATH.EDIT} exact>
        <EditNewsFormConnected></EditNewsFormConnected>
      </Route>
      <Route
        path={props.match.url + NEWS_PATH.SINGLE}
        exact
        render={routeProps => <SingleNews {...routeProps} />}
      ></Route>
      <Redirect path="" exact to={props.match.url + NEWS_PATH.LIST}></Redirect>
    </Switch>
  );
};
export default NewsRouterLayer;
