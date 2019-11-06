import './design.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Label } from 'reactstrap';

import { RankProps } from '../../pages/rank/interface';
import { AUTH_PATH, BASE_PATHS, RANK_PATH } from '../../router/paths';
import { RankFormProps } from './connect';

interface Props extends RankProps, RankFormProps {}
interface State {
  currentNumberBy: number;
  currentTotalResult: number;
}

export class RankForm extends React.Component<Props, State> {
  state: State = {
    currentNumberBy: 10,
    currentTotalResult: 20
  };
  getRank = (currentNumberBy?: number, currentTotalResult?: number) => {
    this.setState(
      {
        currentTotalResult: currentTotalResult
          ? currentTotalResult
          : this.state.currentTotalResult,
        currentNumberBy: currentNumberBy
          ? currentNumberBy
          : this.state.currentNumberBy
      },
      () =>
        this.props.getRankList({
          by: this.state.currentNumberBy,
          totalResult: this.state.currentTotalResult
        })
    );
  };
  componentDidMount() {
    if (!this.props.isLoaded) {
      this.props.getRankList({ by: 50, totalResult: 100 });
    }
  }
  render() {
    return (
      <>
        <div className="rank-form-nav">
          <Link
            to={BASE_PATHS.AUTH + AUTH_PATH.RANK + RANK_PATH.SCORE}
            className={
              this.props.url ===
              BASE_PATHS.AUTH + AUTH_PATH.RANK + RANK_PATH.SCORE
                ? "path-match"
                : undefined
            }
          >
            Pont
          </Link>
          <Link
            to={BASE_PATHS.AUTH + AUTH_PATH.RANK + RANK_PATH.AGE}
            className={
              this.props.url ===
              BASE_PATHS.AUTH + AUTH_PATH.RANK + RANK_PATH.AGE
                ? "path-match"
                : undefined
            }
          >
            Évfolyam
          </Link>
        </div>
        <ul className="rank-form">
          <li>
            <p>Név</p>
            <p>{this.props.displayDataTitle}</p>
          </li>

          {this.props.data &&
            this.props.data.data &&
            this.props.data.data.map(item => (
              <li key={item.userName}>
                <p>{item.userName ? item.userName : "Ismeretlen"}</p>
                <p>{item.displayData}</p>
              </li>
            ))}
          {this.props.isRequesting && "Betöltés..."}
        </ul>
        <div className="rank-data rank-data-title">
          <Label>Évfolyam/pontszám állító</Label>
          <Label>Mennyiség</Label>
        </div>
        <div className="rank-data">
          <div className="rank-data-change">
            <button
              disabled={this.state.currentNumberBy === this.props.number.first}
              onClick={() => this.getRank(this.props.number.first, undefined)}
            >
              {this.props.number.first}
            </button>
            <button
              disabled={this.state.currentNumberBy === this.props.number.second}
              onClick={() => this.getRank(this.props.number.second, undefined)}
            >
              {this.props.number.second}
            </button>
            <button
              disabled={this.state.currentNumberBy === this.props.number.third}
              onClick={() => this.getRank(this.props.number.third, undefined)}
            >
              {this.props.number.third}
            </button>
            <button
              disabled={this.state.currentNumberBy === this.props.number.fourth}
              onClick={() => this.getRank(this.props.number.fourth, undefined)}
            >
              {this.props.number.fourth}
            </button>
          </div>
          <div className="rank-data-change">
            <button
              disabled={this.state.currentTotalResult === 10}
              onClick={() => this.getRank(undefined, 10)}
            >
              {10}
            </button>
            <button
              disabled={this.state.currentTotalResult === 20}
              onClick={() => this.getRank(undefined, 20)}
            >
              {20}
            </button>
            <button
              disabled={this.state.currentTotalResult === 50}
              onClick={() => this.getRank(undefined, 50)}
            >
              {50}
            </button>
            <button
              disabled={this.state.currentTotalResult === 100}
              onClick={() => this.getRank(undefined, 100)}
            >
              {100}
            </button>
          </div>
        </div>
      </>
    );
  }
}
