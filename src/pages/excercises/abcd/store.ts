import {
  genericInitialState,
  GenericStateExtended
} from "../../../template/action";
import { AbcdParams, AbcdData, AbcdPostParams, AbcdPostData } from ".";

export interface AbcdState
  extends GenericStateExtended<
    AbcdParams,
    AbcdData,
    AbcdPostParams,
    AbcdPostData
  > {}
export const initialState: AbcdState = {
  ...genericInitialState(),
  data: undefined,
  params: undefined,
  postParams: undefined,
  postData: { answerCorrect: undefined },
  postSentNumber: 0,
  postError: undefined
};
