import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IApllicationState, resetEverything } from '../../store';
import { CheckloginData } from '../../user/actions/checkLogin.get';
import { toogle } from './actions/toogleTheme.action';
import { HeaderUnconnected } from './component';
import { THEMES } from './store';

const mapStateToProps = (state: IApllicationState): MappedProps => {
  return {
    isConnected: state.app.user.isConnected,
    checkdata: state.app.user.data,
    theme: state.app.theme.theme
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispachedProps =>
  bindActionCreators(
    {
      toogle: toogle,
      logout: resetEverything
    },
    dispatch
  );

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderUnconnected);

export interface DispachedProps {
  toogle: Function;
  logout: () => void;
}
export interface MappedProps {
  isConnected: boolean;
  checkdata: CheckloginData | undefined;
  theme: THEMES;
}
