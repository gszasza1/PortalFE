import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { IApllicationState } from "../../store";
import { HeaderUnconnected } from "./component";
import { toogle } from "./actions/toogleTheme.action";
import { THEMES } from "./store";
import { CheckloginData } from "../../user/actions/checkLogin.get";

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
      toogle: toogle
    },
    dispatch
  );

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderUnconnected);

export interface DispachedProps {
  toogle: Function;
}
export interface MappedProps {
  isConnected: boolean;
  checkdata: CheckloginData | undefined;
  theme: THEMES;
}
