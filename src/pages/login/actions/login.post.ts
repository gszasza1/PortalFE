export interface ILoginPostActionTypes {
  POST_REQUEST: "Login post request";
  POST_SUCCESS: "Login post sucess";
  POST_ERROR: "Login post error";
  POST_MODIFY: "Login post modify";
}

export const LoginPostActionTypes: ILoginPostActionTypes = {
  POST_REQUEST: "Login post request",
  POST_SUCCESS: "Login post sucess",
  POST_ERROR: "Login post error",
  POST_MODIFY: "Login post modify"
};
export interface LoginPostParams {
  userName: string;
  password: string;
}
export interface LoginPostData {
  data: {
    access_token: string;
    refresh_token: string;
    token_type: string;
    expires_in: string;
  };
}

//ACTIONHOZ
export interface IPostLoginRequest {
  type: ILoginPostActionTypes["POST_REQUEST"];
  params: LoginPostParams;
}
export interface IPostLoginSuccess {
  type: ILoginPostActionTypes["POST_SUCCESS"];
  data: LoginPostData;
}
export interface IPostLoginError {
  type: ILoginPostActionTypes["POST_ERROR"];
  error?: string;
}

export interface ILoginModify {
  type: ILoginPostActionTypes["POST_MODIFY"];
  params?: LoginPostParams;
}

//REDUCERHEZ
export type IPostLogin =
  | IPostLoginRequest
  | IPostLoginSuccess
  | IPostLoginError
  | ILoginModify;

//ACTIONCREATORHOZ
export const postLoginData = (params: LoginPostParams): IPostLoginRequest => ({
  type: LoginPostActionTypes.POST_REQUEST,
  params
});

export const postLoginDataError = (error?: string): IPostLoginError => ({
  type: LoginPostActionTypes.POST_ERROR,
  error
});
export const postLoginDataSuccess = (
  data: LoginPostData
): IPostLoginSuccess => ({
  type: LoginPostActionTypes.POST_SUCCESS,
  data
});

export const postLoginDataModify = (
  params?: LoginPostParams
): ILoginModify => ({
  type: LoginPostActionTypes.POST_MODIFY,
  params
});
