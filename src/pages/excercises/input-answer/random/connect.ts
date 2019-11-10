import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IApllicationState } from '../../../../store';
import { getInputAnswerData, InputAnswerData } from './actions/input-answer.get';
import { postInputAnswerData, postInputAnswerDataModify } from './actions/input-answer.post';
import { RandomUnconnected } from './component';

const mapStateToProps = (state: IApllicationState): MappedProps => {
  return {
    items: state.app.pages.excercises.inputAnswer.random.data,
    currentAnswer: state.app.pages.excercises.inputAnswer.random.postParams
      ? state.app.pages.excercises.inputAnswer.random.postParams.answerId
      : undefined,
    correctAnswer: state.app.pages.excercises.inputAnswer.random.postData
      ? state.app.pages.excercises.inputAnswer.random.postData.answerCorrect
      : undefined,
    postSentNumber:
      state.app.pages.excercises.inputAnswer.random.postSentNumber,
    isRequesting: state.app.pages.excercises.inputAnswer.random.isRequesting
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispachedProps =>
  bindActionCreators(
    {
      getInputAnswerData,
      answerSend: postInputAnswerData,
      modifyAnswer: postInputAnswerDataModify
    },
    dispatch
  );

export const Random = connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomUnconnected);

export interface DispachedProps {
  getInputAnswerData: Function;
  answerSend: Function;
  modifyAnswer: Function;
}
export interface MappedProps {
  items?: InputAnswerData;
  currentAnswer?: string;
  correctAnswer?: string;
  postSentNumber?: number;
  isRequesting: boolean;
}

export type RandomStoreProps = MappedProps & DispachedProps;

export default Random;
