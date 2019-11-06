import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import { LoginUnConnected } from "./component";
import { postLoginData, postLoginDataModify } from "./actions/login.post";
import { IApllicationState } from "../../store";
import { GeneralProps } from "../../functions/interfaces";
const mapStateToProps = (state: IApllicationState): MappedProps => {
  return {
    isRequesting:state.app.pages.login.isRequesting,
    error:state.app.pages.login.error,
    isLoaded:state.app.pages.login.isLoaded

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
export interface MappedProps extends GeneralProps {

}

export type LoginStoreProps = MappedProps & DispachedProps;

export default Login;
