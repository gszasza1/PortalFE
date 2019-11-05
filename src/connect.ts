import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { IApllicationState } from "./store";

import AppUnconnected from "./App";
import {
  getCheckloginData,
  CheckloginParams
} from "./user/actions/checkLogin.get";
const mapStateToProps = (state: IApllicationState): MappedProps => {
  return {
    isConnected: state.app.user.isConnected
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
}

export type LoginProps = MappedProps & DispachedProps;
