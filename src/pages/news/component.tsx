import './design.scss';

import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button } from 'reactstrap';

import { NEWS_PATH } from '../../router/paths';

export const GeneralNewsPage = (props: RouteComponentProps) => {
  return (
    <div className="general-news-container">
      <Link to={props.location.pathname + NEWS_PATH.CREATE}>
        <Button>Új hír készítése</Button>
      </Link>
      <Link to={props.location.pathname + NEWS_PATH.LIST}>
        <Button>Hírek listázása</Button>
      </Link>
    </div>
  );
};
export default GeneralNewsPage;
