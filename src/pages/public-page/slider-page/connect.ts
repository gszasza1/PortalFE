import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IApllicationState } from '../../../store';
import { getWelcomePageData, welcomePageData } from '../card-page/actions/welcome.get';
import { SliderPageUnconnected } from './component';

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
