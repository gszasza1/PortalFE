import React from "react";
import { GameCard } from "../../../components/game-card/card";
import { MappedProps } from "./connect";
import "./design.scss";

interface Props extends MappedProps {}
export class CardPageUnconnected extends React.Component<Props> {
  render() {
    return (
      <div className="news">
        {this.props.items.map(item => (
          <GameCard
            cardText={item.cardText}
            title={item.title}
            subtitle={item.subtitle}
            key={item.id}
            id={item.id}
            img={item.img}
          ></GameCard>
        ))}
      </div>
    );
  }
}
