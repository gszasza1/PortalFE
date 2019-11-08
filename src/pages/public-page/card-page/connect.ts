import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { GeneralProps } from '../../../functions/interfaces';
import { IApllicationState } from '../../../store';
import { getWelcomePageData, welcomePageData, welcomePageParams } from './actions/welcome.get';
import { CardPageUnconnected } from './component';

const mapStateToProps = (state: IApllicationState): MappedProps => {
  return {
    data: state.app.pages.welcomePage.data
      ? state.app.pages.welcomePage.data.data
      : undefined,
    error: state.app.pages.welcomePage.error,
    isLoaded: state.app.pages.welcomePage.isLoaded,
    isRequesting: state.app.pages.welcomePage.isRequesting
  };
};
const mapDispatchToProps = (dispatch: Dispatch): DispachedProps =>
  bindActionCreators(
    {
      getWelcomePageData: getWelcomePageData
    },
    dispatch
  );

export const CardPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardPageUnconnected);

export interface DispachedProps {
  getWelcomePageData: (params: welcomePageParams) => void;
}
interface MappedProps extends GeneralProps, welcomePageData {}
export interface WelcomePageProps extends DispachedProps, MappedProps {}
