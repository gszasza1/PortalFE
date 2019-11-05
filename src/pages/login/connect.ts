import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import { LoginUnConnected } from "./component";
import { postLoginData, postLoginDataModify } from "./actions/login.post";
import { IApllicationState } from "../../store";
const mapStateToProps = (state: IApllicationState): MappedProps => {
  return {};
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
export interface MappedProps {}

export type LoginStoreProps = MappedProps & DispachedProps;

export default Login;
