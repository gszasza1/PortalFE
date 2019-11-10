import { ISendInputExcercise } from '../../../../../Client';

export interface ICreateInputExcerciseFormActionTypes {
  REQUEST: "Create InputExcercise Form request";
  SUCCESS: "Create InputExcercise Form sucess";
  ERROR: "Create InputExcercise Form error";
}

export const CreateInputExcerciseFormActionTypes: ICreateInputExcerciseFormActionTypes = {
  REQUEST: "Create InputExcercise Form request",
  SUCCESS: "Create InputExcercise Form sucess",
  ERROR: "Create InputExcercise Form error"
};
export interface CreateInputExcerciseFormParams extends ISendInputExcercise {}
export interface CreateInputExcerciseFormData {}

//ACTIONHOZ
export interface ICreateInputExcerciseFormRequest {
  type: ICreateInputExcerciseFormActionTypes["REQUEST"];
  params: CreateInputExcerciseFormParams;
}
export interface ICreateInputExcerciseFormSuccess {
  type: ICreateInputExcerciseFormActionTypes["SUCCESS"];
  data: CreateInputExcerciseFormData;
}
export interface ICreateInputExcerciseFormError {
  type: ICreateInputExcerciseFormActionTypes["ERROR"];
  error?: string;
}

//REDUCERHEZ
export type ICreateInputExcerciseForm =
  | ICreateInputExcerciseFormRequest
  | ICreateInputExcerciseFormSuccess
  | ICreateInputExcerciseFormError;

//ACTIONCREATORHOZ
export const CreateInputExcerciseFormData = (
  params: CreateInputExcerciseFormParams
): ICreateInputExcerciseFormRequest => ({
  type: CreateInputExcerciseFormActionTypes.REQUEST,
  params
});

export const CreateInputExcerciseFormDataError = (
  error?: string
): ICreateInputExcerciseFormError => ({
  type: CreateInputExcerciseFormActionTypes.ERROR,
  error
});
export const CreateInputExcerciseFormDataSuccess = (
  data: CreateInputExcerciseFormData
): ICreateInputExcerciseFormSuccess => ({
  type: CreateInputExcerciseFormActionTypes.SUCCESS,
  data
});
