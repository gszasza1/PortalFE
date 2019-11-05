import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import { SliderPageUnconnected } from "./component";
import { welcomePageData, getWelcomePageData } from "./actions/welcome.get";
import { IApllicationState } from "../../../store";
const mapStateToProps = (state: IApllicationState): MappedProps => {
  const initState: welcomePageData = { db: [], cards: [] };
  return {
    items: state.app.pages.welcomePage.data
      ? state.app.pages.welcomePage.data
      : initState
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispachedProps =>
  bindActionCreators(
    {
      getWelcomePageData
    },
    dispatch
  );

export const SliderPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SliderPageUnconnected);

export interface DispachedProps {
  getWelcomePageData: Function;
}
export interface MappedProps {
  items: welcomePageData;
}

export type LoginProps = MappedProps & DispachedProps;
