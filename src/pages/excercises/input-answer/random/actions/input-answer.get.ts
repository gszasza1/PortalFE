import { IInputRandom } from '../../../../../Client';

export interface IInputAnswerActionTypes {
  REQUEST: "InputAnswer request";
  SUCCESS: "InputAnswer sucess";
  ERROR: "InputAnswer error";
}

export const InputAnswerActionTypes: IInputAnswerActionTypes = {
  REQUEST: "InputAnswer request",
  SUCCESS: "InputAnswer sucess",
  ERROR: "InputAnswer error"
};
export interface InputAnswerParams {}
export interface InputAnswerData {
  data?: IInputRandom;
}

//ACTIONHOZ
export interface IInputAnswerRequest {
  type: IInputAnswerActionTypes["REQUEST"];
  params: InputAnswerParams;
}
export interface IInputAnswerSuccess {
  type: IInputAnswerActionTypes["SUCCESS"];
  data: InputAnswerData;
}
export interface IInputAnswerError {
  type: IInputAnswerActionTypes["ERROR"];
  error?: string;
}

//REDUCERHEZ
export type IInputAnswer =
  | IInputAnswerRequest
  | IInputAnswerSuccess
  | IInputAnswerError;

//ACTIONCREATORHOZ
export const getInputAnswerData = (
  params: InputAnswerParams
): IInputAnswerRequest => ({
  type: InputAnswerActionTypes.REQUEST,
  params
});

export const getInputAnswerDataError = (error?: string): IInputAnswerError => ({
  type: InputAnswerActionTypes.ERROR,
  error
});
export const getInputAnswerDataSuccess = (
  data: InputAnswerData
): IInputAnswerSuccess => ({
  type: InputAnswerActionTypes.SUCCESS,
  data
});
