import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { GeneralProps } from '../../../../functions/interfaces';
import { IApllicationState } from '../../../../store';
import { getInputAnswerData, InputAnswerData } from './actions/input-answer.get';
import { InputAnswerPostParams, postInputAnswerData, postInputAnswerDataModify } from './actions/input-answer.post';
import { RandomUnconnected } from './component';

const mapStateToProps = (state: IApllicationState): MappedProps => {
  return {
    isLoaded: state.app.pages.excercises.inputAnswer.random.isLoaded,
    isRequesting: state.app.pages.excercises.inputAnswer.random.isRequesting,
    error: state.app.pages.excercises.inputAnswer.random.error,
    data: state.app.pages.excercises.inputAnswer.random.data
      ? state.app.pages.excercises.inputAnswer.random.data.data
      : undefined,
    answer: state.app.pages.excercises.inputAnswer.random.postParams
      ? state.app.pages.excercises.inputAnswer.random.postParams.answer
      : ""
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
  answerSend: (props: InputAnswerPostParams) => void;
  modifyAnswer: Function;
}
export interface MappedProps extends GeneralProps, InputAnswerData {
  answer?: string;
}

export type RandomStoreProps = MappedProps & DispachedProps;

export default Random;
