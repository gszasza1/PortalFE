import { genericInitialState, GenericStateExtended } from '../../../../template/action';
import { InputAnswerData, InputAnswerParams } from './actions/input-answer.get';
import { InputAnswerPostData, InputAnswerPostParams } from './actions/input-answer.post';

export interface RandomState
  extends GenericStateExtended<
    InputAnswerParams,
    InputAnswerData,
    InputAnswerPostParams,
    InputAnswerPostData
  > {}
export const initialState: RandomState = {
  ...genericInitialState(),
  data: undefined,
  params: undefined,
  postParams: undefined,
  postData: { answerCorrect: undefined },
  postSentNumber: 0,
  postError: undefined
};
