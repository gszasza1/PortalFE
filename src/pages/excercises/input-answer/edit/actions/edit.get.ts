import { MinimizedInputExcercise } from '../../../../../Client';

export interface IGetEditInputExcerciseFormActionTypes {
  REQUEST: "Get Edit InputExcercise Form request";
  SUCCESS: "Get Edit InputExcercise Form sucess";
  ERROR: "Get Edit InputExcercise Form error";
}

export const GetEditInputExcerciseFormActionTypes: IGetEditInputExcerciseFormActionTypes = {
  REQUEST: "Get Edit InputExcercise Form request",
  SUCCESS: "Get Edit InputExcercise Form sucess",
  ERROR: "Get Edit InputExcercise Form error"
};
export interface GetEditInputExcerciseFormParams {
  id: number;
}
export interface GetEditInputExcerciseFormData
  extends MinimizedInputExcercise {}

//ACTIONHOZ
export interface IGetEditInputExcerciseFormRequest {
  type: IGetEditInputExcerciseFormActionTypes["REQUEST"];
  params: GetEditInputExcerciseFormParams;
}
export interface IGetEditInputExcerciseFormSuccess {
  type: IGetEditInputExcerciseFormActionTypes["SUCCESS"];
  data: GetEditInputExcerciseFormData;
}
export interface IGetEditInputExcerciseFormError {
  type: IGetEditInputExcerciseFormActionTypes["ERROR"];
  error?: string;
}

//REDUCERHEZ
export type IGetEditInputExcerciseForm =
  | IGetEditInputExcerciseFormRequest
  | IGetEditInputExcerciseFormSuccess
  | IGetEditInputExcerciseFormError;

//ACTIONCREATORHOZ
export const GetEditInputExcerciseFormData = (
  params: GetEditInputExcerciseFormParams
): IGetEditInputExcerciseFormRequest => ({
  type: GetEditInputExcerciseFormActionTypes.REQUEST,
  params
});

export const GetEditInputExcerciseFormDataError = (
  error?: string
): IGetEditInputExcerciseFormError => ({
  type: GetEditInputExcerciseFormActionTypes.ERROR,
  error
});
export const GetEditInputExcerciseFormDataSuccess = (
  data: GetEditInputExcerciseFormData
): IGetEditInputExcerciseFormSuccess => ({
  type: GetEditInputExcerciseFormActionTypes.SUCCESS,
  data
});
