import './design.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

import { AUTH_PATH, BASE_PATHS, RANK_PATH } from '../../../router/paths';

export class RankSelector extends React.Component {
  render() {
    return (
      <div className="rank-selector">
        <Link to={BASE_PATHS.AUTH + AUTH_PATH.RANK + RANK_PATH.SCORE}>
          <Toast>
            <ToastHeader>Pontszám alapján</ToastHeader>
            <ToastBody>Csekkold le, kinek van alegtöbb pontja!</ToastBody>
          </Toast>
        </Link>
        <Link to={BASE_PATHS.AUTH + AUTH_PATH.RANK + RANK_PATH.AGE}>
          <Toast>
            <ToastHeader>Évfolyam alapján</ToastHeader>
            <ToastBody>Csekkold le a legidősebb felhasználót</ToastBody>
          </Toast>{" "}
        </Link>
      </div>
    );
  }
}
export default RankSelector;
