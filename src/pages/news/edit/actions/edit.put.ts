import { IPostNews } from '../../../../Client';

export interface IEditNewsFormActionTypes {
  REQUEST: "Edit News Form request";
  SUCCESS: "Edit News Form sucess";
  ERROR: "Edit News Form error";
}

export const EditNewsFormActionTypes: IEditNewsFormActionTypes = {
  REQUEST: "Edit News Form request",
  SUCCESS: "Edit News Form sucess",
  ERROR: "Edit News Form error"
};
export interface EditNewsFormParams extends IPostNews {}
export interface EditNewsFormData {}

//ACTIONHOZ
export interface IEditNewsFormRequest {
  type: IEditNewsFormActionTypes["REQUEST"];
  params: EditNewsFormParams;
}
export interface IEditNewsFormSuccess {
  type: IEditNewsFormActionTypes["SUCCESS"];
  data: EditNewsFormData;
}
export interface IEditNewsFormError {
  type: IEditNewsFormActionTypes["ERROR"];
  error?: string;
}

//REDUCERHEZ
export type IEditNewsForm =
  | IEditNewsFormRequest
  | IEditNewsFormSuccess
  | IEditNewsFormError;

//ACTIONCREATORHOZ
export const EditNewsFormData = (
  params: EditNewsFormParams
): IEditNewsFormRequest => ({
  type: EditNewsFormActionTypes.REQUEST,
  params
});

export const EditNewsFormDataError = (
  error?: string
): IEditNewsFormError => ({
  type: EditNewsFormActionTypes.ERROR,
  error
});
export const EditNewsFormDataSuccess = (
  data: EditNewsFormData
): IEditNewsFormSuccess => ({
  type: EditNewsFormActionTypes.SUCCESS,
  data
});
