import { connect } from "react-redux";

import { CardPageUnconnected } from "./component";
import { IApllicationState } from "../../../store";
import { GameCardProps } from "../../../components/game-card/card";
const mapStateToProps = (state: IApllicationState): MappedProps => {
  return {
    items: state.app.pages.welcomePage.data
      ? state.app.pages.welcomePage.data.cards
      : []
  };
};

export const CardPage = connect(mapStateToProps)(CardPageUnconnected);

export interface DispachedProps {}
export interface MappedProps {
  items: GameCardProps[];
}
