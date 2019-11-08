import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { GeneralProps } from '../../functions/interfaces';
import { IApllicationState } from '../../store';
import { postLoginData, postLoginDataModify } from './actions/login.post';
import { LoginUnConnected } from './component';

const mapStateToProps = (state: IApllicationState): MappedProps => {
  return {
    isRequesting: state.app.pages.login.isRequesting,
    error: state.app.pages.login.error,
    isLoaded: state.app.pages.login.isLoaded
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispachedProps =>
  bindActionCreators(
    {
      LoginSend: postLoginData,
      modifyLoginData: postLoginDataModify
    },
    dispatch
  );

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginUnConnected);

export interface DispachedProps {
  LoginSend: Function;
  modifyLoginData: Function;
}
export interface MappedProps extends GeneralProps {}

export type LoginStoreProps = MappedProps & DispachedProps;

export default Login;
