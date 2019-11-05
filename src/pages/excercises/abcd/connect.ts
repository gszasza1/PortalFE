import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import { IApllicationState } from "../../../store";
import {
  postAbcdData,
  postAbcdDataModify,
  AbcdData,
  getAbcdData,
  ABCDUnConnected
} from ".";
const mapStateToProps = (state: IApllicationState): MappedProps => {
  return {
    items: state.app.pages.excercises.abcd.data,
    currentAnswer: state.app.pages.excercises.abcd.postParams
      ? state.app.pages.excercises.abcd.postParams.answerId
      : undefined,
    correctAnswer: state.app.pages.excercises.abcd.postData
      ? state.app.pages.excercises.abcd.postData.answerCorrect
      : undefined,
    postSentNumber: state.app.pages.excercises.abcd.postSentNumber,
    isRequesting: state.app.pages.excercises.abcd.isRequesting
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispachedProps =>
  bindActionCreators(
    {
      getAbcdData,
      answerSend: postAbcdData,
      modifyAnswer: postAbcdDataModify
    },
    dispatch
  );

export const ABCD = connect(
  mapStateToProps,
  mapDispatchToProps
)(ABCDUnConnected);

export interface DispachedProps {
  getAbcdData: Function;
  answerSend: Function;
  modifyAnswer: Function;
}
export interface MappedProps {
  items?: AbcdData;
  currentAnswer?: string;
  correctAnswer?: string;
  postSentNumber?: number;
  isRequesting: boolean;
}

export type AbcdStoreProps = MappedProps & DispachedProps;

export default ABCD;
