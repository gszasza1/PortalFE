import { IRegisterData } from "../../../Client";

export interface IRegisterPostActionTypes {
  POST_REQUEST: "Register post request";
  POST_SUCCESS: "Register post sucess";
  POST_ERROR: "Register post error";
  POST_MODIFY: "Register post modify";
}

export const RegisterPostActionTypes: IRegisterPostActionTypes = {
  POST_REQUEST: "Register post request",
  POST_SUCCESS: "Register post sucess",
  POST_ERROR: "Register post error",
  POST_MODIFY: "Register post modify"
};
export interface RegisterPostParams extends IRegisterData {}
export interface RegisterPostData {}

//ACTIONHOZ
export interface IPostRegisterRequest {
  type: IRegisterPostActionTypes["POST_REQUEST"];
  params: RegisterPostParams;
}
export interface IPostRegisterSuccess {
  type: IRegisterPostActionTypes["POST_SUCCESS"];
  data: RegisterPostData;
}
export interface IPostRegisterError {
  type: IRegisterPostActionTypes["POST_ERROR"];
  error?: string;
}

export interface IRegisterModify {
  type: IRegisterPostActionTypes["POST_MODIFY"];
  params?: RegisterPostParams;
}

//REDUCERHEZ
export type IPostRegister =
  | IPostRegisterRequest
  | IPostRegisterSuccess
  | IPostRegisterError
  | IRegisterModify;

//ACTIONCREATORHOZ
export const postRegisterData = (
  params: RegisterPostParams
): IPostRegisterRequest => ({
  type: RegisterPostActionTypes.POST_REQUEST,
  params
});

export const postRegisterDataError = (error?: string): IPostRegisterError => ({
  type: RegisterPostActionTypes.POST_ERROR,
  error
});
export const postRegisterDataSuccess = (
  data: RegisterPostData
): IPostRegisterSuccess => ({
  type: RegisterPostActionTypes.POST_SUCCESS,
  data
});

export const postRegisterDataModify = (
  params?: RegisterPostParams
): IRegisterModify => ({
  type: RegisterPostActionTypes.POST_MODIFY,
  params
});
