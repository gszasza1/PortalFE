import {
  genericInitialState,
  GenericStateExtended
} from "../../../template/action";
import { InputAnswerParams, InputAnswerData } from "./actions/input-answer.get";
import {
  InputAnswerPostParams,
  InputAnswerPostData
} from "./actions/input-answer.post";

export interface InputAnswerState
  extends GenericStateExtended<
    InputAnswerParams,
    InputAnswerData,
    InputAnswerPostParams,
    InputAnswerPostData
  > {}
export const initialState: InputAnswerState = {
  ...genericInitialState(),
  data: undefined,
  params: undefined,
  postParams: undefined,
  postData: { answerCorrect: undefined },
  postSentNumber: 0,
  postError: undefined
};
