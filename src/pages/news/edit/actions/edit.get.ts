import { INew } from '../../../../Client';

export interface IGetEditNewsFormActionTypes {
  REQUEST: "GetEditNewsForm request";
  SUCCESS: "GetEditNewsForm sucess";
  ERROR: "GetEditNewsForm error";
}

export const GetEditNewsFormActionTypes: IGetEditNewsFormActionTypes = {
  REQUEST: "GetEditNewsForm request",
  SUCCESS: "GetEditNewsForm sucess",
  ERROR: "GetEditNewsForm error"
};
export interface GetEditNewsFormParams {
  id: number | undefined;
}
export interface GetEditNewsFormData extends INew {}

//ACTIONHOZ
export interface IGetEditNewsFormRequest {
  type: IGetEditNewsFormActionTypes["REQUEST"];
  params: GetEditNewsFormParams;
}
export interface IGetEditNewsFormSuccess {
  type: IGetEditNewsFormActionTypes["SUCCESS"];
  data: GetEditNewsFormData;
}
export interface IGetEditNewsFormError {
  type: IGetEditNewsFormActionTypes["ERROR"];
  error?: string;
}

//REDUCERHEZ
export type IGetEditNewsForm =
  | IGetEditNewsFormRequest
  | IGetEditNewsFormSuccess
  | IGetEditNewsFormError;

//ACTIONCREATORHOZ
export const getGetEditNewsFormData = (
  params: GetEditNewsFormParams
): IGetEditNewsFormRequest => ({
  type: GetEditNewsFormActionTypes.REQUEST,
  params
});

export const getGetEditNewsFormDataError = (
  error?: string
): IGetEditNewsFormError => ({
  type: GetEditNewsFormActionTypes.ERROR,
  error
});
export const getGetEditNewsFormDataSuccess = (
  data: GetEditNewsFormData
): IGetEditNewsFormSuccess => ({
  type: GetEditNewsFormActionTypes.SUCCESS,
  data
});
