import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import { IApllicationState } from "../../../store";
import { InputAnswerData } from "./actions/input-answer.get";
import { InputAnswerUnConnected } from "./component";
import { getInputAnswerData } from "./actions/input-answer.get";
import {
  postInputAnswerData,
  postInputAnswerDataModify
} from "./actions/input-answer.post";
const mapStateToProps = (state: IApllicationState): MappedProps => {
  return {
    items: state.app.pages.excercises.inputAnswer.data,
    currentAnswer: state.app.pages.excercises.inputAnswer.postParams
      ? state.app.pages.excercises.inputAnswer.postParams.answerId
      : undefined,
    correctAnswer: state.app.pages.excercises.inputAnswer.postData
      ? state.app.pages.excercises.inputAnswer.postData.answerCorrect
      : undefined,
    postSentNumber: state.app.pages.excercises.inputAnswer.postSentNumber,
    isRequesting: state.app.pages.excercises.inputAnswer.isRequesting
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

export const InputAnswer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputAnswerUnConnected);

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

export type InputAnswerStoreProps = MappedProps & DispachedProps;

export default InputAnswer;
