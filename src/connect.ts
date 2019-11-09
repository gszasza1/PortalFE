import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AppUnconnected from './App';
import { IApllicationState } from './store';
import { CheckloginParams, getCheckloginData } from './user/actions/checkLogin.get';

const mapStateToProps = (state: IApllicationState): MappedProps => {
  return {
    isConnected: state.app.user.isConnected,
    currentRoute: state.router.location.pathname
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispachedProps =>
  bindActionCreators(
    {
      checkLoggedin: getCheckloginData
    },
    dispatch
  );

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppUnconnected);

export interface DispachedProps {
  checkLoggedin: (prop: CheckloginParams) => void;
}
export interface MappedProps {
  isConnected: boolean;
  currentRoute: string;
}

export type LoginProps = MappedProps & DispachedProps;
