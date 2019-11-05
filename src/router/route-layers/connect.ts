import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { IApllicationState } from "../../store";
import { getCheckloginData } from "../../user/actions/checkLogin.get";
import { RouteLayerUnconnected } from "./base";
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

export const RouteLayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteLayerUnconnected);

export interface DispachedProps {
  checkLoggedin: Function;
}
export interface MappedProps {
  isConnected: boolean;
}

export type AuthProps = MappedProps & DispachedProps;
