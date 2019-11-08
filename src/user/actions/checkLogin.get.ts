import { IMinimizedLoginData } from '../../Client';

export interface ICheckloginActionTypes {
  REQUEST: "Check login request";
  SUCCESS: "Check login sucess";
  ERROR: "Check login error";
}

export const CheckloginActionTypes: ICheckloginActionTypes = {
  REQUEST: "Check login request",
  SUCCESS: "Check login sucess",
  ERROR: "Check login error"
};
export interface CheckloginParams {}
export interface CheckloginData extends IMinimizedLoginData {}

//ACTIONHOZ
export interface ICheckloginRequest {
  type: ICheckloginActionTypes["REQUEST"];
  params: CheckloginParams;
}
export interface ICheckloginSuccess {
  type: ICheckloginActionTypes["SUCCESS"];
  data: CheckloginData;
}
export interface ICheckloginError {
  type: ICheckloginActionTypes["ERROR"];
  error?: string;
}

//REDUCERHEZ
export type IChecklogin =
  | ICheckloginRequest
  | ICheckloginSuccess
  | ICheckloginError;

//ACTIONCREATORHOZ
export const getCheckloginData = (
  params: CheckloginParams
): ICheckloginRequest => ({
  type: CheckloginActionTypes.REQUEST,
  params
});

export const getCheckloginDataError = (error?: string): ICheckloginError => ({
  type: CheckloginActionTypes.ERROR,
  error
});
export const getCheckloginDataSuccess = (
  data: CheckloginData
): ICheckloginSuccess => ({
  type: CheckloginActionTypes.SUCCESS,
  data
});
