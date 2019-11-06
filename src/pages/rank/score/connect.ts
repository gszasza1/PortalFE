import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import { IApllicationState } from "../../../store";
import { getScoreRankData } from ".";
import RankFormWithRouter from "../../../components/rank-form/connect";
import { DispachedProps, MappedProps } from "../interface";
const mapStateToProps = (state: IApllicationState): MappedProps => {
  return {
    data: state.app.pages.rank.score.data,
    error: state.app.pages.rank.score.error,
    isLoaded: state.app.pages.rank.score.isLoaded,
    isRequesting: state.app.pages.rank.score.isRequesting,
    displayDataTitle: "Pontszám",
    number: {
      first: 5,
      second: 10,
      third: 50,
      fourth: 100
    }
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispachedProps =>
  bindActionCreators(
    {
      getRankList: getScoreRankData
    },
    dispatch
  );

export const ScoreRankForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(RankFormWithRouter);

export default ScoreRankForm;
