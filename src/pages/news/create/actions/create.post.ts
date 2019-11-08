import { IPostNews } from '../../../../Client';

export interface ICreateNewsFormActionTypes {
  REQUEST: "Create News Form request";
  SUCCESS: "Create News Form sucess";
  ERROR: "Create News Form error";
}

export const CreateNewsFormActionTypes: ICreateNewsFormActionTypes = {
  REQUEST: "Create News Form request",
  SUCCESS: "Create News Form sucess",
  ERROR: "Create News Form error"
};
export interface CreateNewsFormParams extends IPostNews {}
export interface CreateNewsFormData {}

//ACTIONHOZ
export interface ICreateNewsFormRequest {
  type: ICreateNewsFormActionTypes["REQUEST"];
  params: CreateNewsFormParams;
}
export interface ICreateNewsFormSuccess {
  type: ICreateNewsFormActionTypes["SUCCESS"];
  data: CreateNewsFormData;
}
export interface ICreateNewsFormError {
  type: ICreateNewsFormActionTypes["ERROR"];
  error?: string;
}

//REDUCERHEZ
export type ICreateNewsForm =
  | ICreateNewsFormRequest
  | ICreateNewsFormSuccess
  | ICreateNewsFormError;

//ACTIONCREATORHOZ
export const CreateNewsFormData = (
  params: CreateNewsFormParams
): ICreateNewsFormRequest => ({
  type: CreateNewsFormActionTypes.REQUEST,
  params
});

export const CreateNewsFormDataError = (
  error?: string
): ICreateNewsFormError => ({
  type: CreateNewsFormActionTypes.ERROR,
  error
});
export const CreateNewsFormDataSuccess = (
  data: CreateNewsFormData
): ICreateNewsFormSuccess => ({
  type: CreateNewsFormActionTypes.SUCCESS,
  data
});
