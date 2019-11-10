import { INew } from '../../../../Client';

export interface ISingleNewsGetActionTypes {
  REQUEST: "SingleNews get request";
  SUCCESS: "SingleNews get sucess";
  ERROR: "SingleNews get error";
}

export const SingleNewsGetActionTypes: ISingleNewsGetActionTypes = {
  REQUEST: "SingleNews get request",
  SUCCESS: "SingleNews get sucess",
  ERROR: "SingleNews get error"
};
export interface SingleNewsGetParams {
  id: number;
}
export interface SingleNewsGetData extends INew {}

//ACTIONHOZ
export interface ISingleNewsGetRequest {
  type: ISingleNewsGetActionTypes["REQUEST"];
  params: SingleNewsGetParams;
}
export interface ISingleNewsGetSuccess {
  type: ISingleNewsGetActionTypes["SUCCESS"];
  data: SingleNewsGetData;
}
export interface ISingleNewsGetError {
  type: ISingleNewsGetActionTypes["ERROR"];
  error?: string;
}

//REDUCERHEZ
export type ISingleNewsGet =
  | ISingleNewsGetRequest
  | ISingleNewsGetSuccess
  | ISingleNewsGetError;

//ACTIONCREATORHOZ
export const SingleNewsGetData = (
  params: SingleNewsGetParams
): ISingleNewsGetRequest => ({
  type: SingleNewsGetActionTypes.REQUEST,
  params
});

export const SingleNewsGetDataError = (
  error?: string
): ISingleNewsGetError => ({
  type: SingleNewsGetActionTypes.ERROR,
  error
});
export const SingleNewsGetDataSuccess = (
  data: SingleNewsGetData
): ISingleNewsGetSuccess => ({
  type: SingleNewsGetActionTypes.SUCCESS,
  data
});
