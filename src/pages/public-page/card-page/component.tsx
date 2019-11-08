import './design.scss';

import React from 'react';

import { GameCard } from '../../../components/game-card/card';
import { WelcomePageProps } from './connect';

interface Props extends WelcomePageProps {}
export class CardPageUnconnected extends React.Component<Props> {
  componentDidMount() {
    this.props.getWelcomePageData({});
  }
  render() {
    return (
      <div className="news">
        {this.props.data &&
          this.props.data.map(item => (
            <GameCard
              cardText={item.description}
              title={item.title}
              subtitle={item.link}
              key={item.id}
              id={item.id}
            ></GameCard>
          ))}
      </div>
    );
  }
}
