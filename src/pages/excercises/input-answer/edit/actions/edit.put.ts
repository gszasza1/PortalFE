import { ISendInputExcercise } from '../../../../../Client';

export interface IEditInputExcerciseFormActionTypes {
  REQUEST: "Edit InputExcercise Form request";
  SUCCESS: "Edit InputExcercise Form sucess";
  ERROR: "Edit InputExcercise Form error";
}

export const EditInputExcerciseFormActionTypes: IEditInputExcerciseFormActionTypes = {
  REQUEST: "Edit InputExcercise Form request",
  SUCCESS: "Edit InputExcercise Form sucess",
  ERROR: "Edit InputExcercise Form error"
};
export interface EditInputExcerciseFormParams extends ISendInputExcercise {}
export interface EditInputExcerciseFormData {}

//ACTIONHOZ
export interface IEditInputExcerciseFormRequest {
  type: IEditInputExcerciseFormActionTypes["REQUEST"];
  params: EditInputExcerciseFormParams;
}
export interface IEditInputExcerciseFormSuccess {
  type: IEditInputExcerciseFormActionTypes["SUCCESS"];
  data: EditInputExcerciseFormData;
}
export interface IEditInputExcerciseFormError {
  type: IEditInputExcerciseFormActionTypes["ERROR"];
  error?: string;
}

//REDUCERHEZ
export type IEditInputExcerciseForm =
  | IEditInputExcerciseFormRequest
  | IEditInputExcerciseFormSuccess
  | IEditInputExcerciseFormError;

//ACTIONCREATORHOZ
export const EditInputExcerciseFormData = (
  params: EditInputExcerciseFormParams
): IEditInputExcerciseFormRequest => ({
  type: EditInputExcerciseFormActionTypes.REQUEST,
  params
});

export const EditInputExcerciseFormDataError = (
  error?: string
): IEditInputExcerciseFormError => ({
  type: EditInputExcerciseFormActionTypes.ERROR,
  error
});
export const EditInputExcerciseFormDataSuccess = (
  data: EditInputExcerciseFormData
): IEditInputExcerciseFormSuccess => ({
  type: EditInputExcerciseFormActionTypes.SUCCESS,
  data
});
