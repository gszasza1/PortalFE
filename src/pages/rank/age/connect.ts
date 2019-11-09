import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { getAgeRankData } from '.';
import RankFormWithRouter from '../../../components/rank-form/connect';
import { IApllicationState } from '../../../store';
import { DispachedProps, MappedProps } from '../interface';

const mapStateToProps = (state: IApllicationState): MappedProps => {
  return {
    data: state.app.pages.rank.age.data,
    error: state.app.pages.rank.age.error,
    isLoaded: state.app.pages.rank.age.isLoaded,
    isRequesting: state.app.pages.rank.age.isRequesting,
    displayDataTitle: "Évfolyam",
    number: {
      first: 1,
      second: 3,
      third: 5,
      fourth: 7
    }
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispachedProps =>
  bindActionCreators(
    {
      getRankList: getAgeRankData
    },
    dispatch
  );

export const AgeRankForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(RankFormWithRouter);

export default AgeRankForm;
