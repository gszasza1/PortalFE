import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import { RegisterUnConnected } from "./component";
import {
  RegisterPostParams,
  postRegisterData,
  postRegisterDataModify
} from "./actions/register.post";
import { IApllicationState } from "../../store";
const mapStateToProps = (state: IApllicationState): MappedProps => {
  return {
    registerItem: state.app.pages.register.params
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispachedProps =>
  bindActionCreators(
    {
      registerSend: postRegisterData,
      modifyRegisterData: postRegisterDataModify
    },
    dispatch
  );

export const Register = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterUnConnected);

export interface DispachedProps {
  registerSend: Function;
  modifyRegisterData: Function;
}
export interface MappedProps {
  registerItem?: RegisterPostParams;
}

export type RegisterStoreProps = MappedProps & DispachedProps;

export default Register;
