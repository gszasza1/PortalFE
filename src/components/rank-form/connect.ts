import { connect } from "react-redux";

import { RankForm } from "./rank-form";
import { IApllicationState } from "../../store";
const mapStateToProps = (state: IApllicationState): MappedProps => {
  return {
    url: state.router.location.pathname
  };
};

export const RankFormWithRouter = connect(
  mapStateToProps,
  {}
)(RankForm);

export interface MappedProps {
  url: string;
}

export type RankFormProps = MappedProps;

export default RankFormWithRouter;
