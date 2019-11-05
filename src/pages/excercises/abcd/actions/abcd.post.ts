export interface IAbcdPostActionTypes {
  POST_REQUEST: "Abcd post request";
  POST_SUCCESS: "Abcd post sucess";
  POST_ERROR: "Abcd post error";
  POST_MODIFY: "Abcd post modify";
}

export const AbcdPostActionTypes: IAbcdPostActionTypes = {
  POST_REQUEST: "Abcd post request",
  POST_SUCCESS: "Abcd post sucess",
  POST_ERROR: "Abcd post error",
  POST_MODIFY: "Abcd post modify"
};
export interface AbcdPostParams {
  id: string;
  answerId?: string;
}
export interface AbcdPostData {
  answerCorrect?: string;
}

//ACTIONHOZ
export interface IPostAbcdRequest {
  type: IAbcdPostActionTypes["POST_REQUEST"];
  params: AbcdPostParams;
}
export interface IPostAbcdSuccess {
  type: IAbcdPostActionTypes["POST_SUCCESS"];
  data: AbcdPostData;
}
export interface IPostAbcdError {
  type: IAbcdPostActionTypes["POST_ERROR"];
  error?: string;
}

export interface IAbcdModify {
  type: IAbcdPostActionTypes["POST_MODIFY"];
  params?: string;
}

//REDUCERHEZ
export type IPostAbcd =
  | IPostAbcdRequest
  | IPostAbcdSuccess
  | IPostAbcdError
  | IAbcdModify;

//ACTIONCREATORHOZ
export const postAbcdData = (params: AbcdPostParams): IPostAbcdRequest => ({
  type: AbcdPostActionTypes.POST_REQUEST,
  params
});

export const postAbcdDataError = (error?: string): IPostAbcdError => ({
  type: AbcdPostActionTypes.POST_ERROR,
  error
});
export const postAbcdDataSuccess = (data: AbcdPostData): IPostAbcdSuccess => ({
  type: AbcdPostActionTypes.POST_SUCCESS,
  data
});

export const postAbcdDataModify = (params?: string): IAbcdModify => ({
  type: AbcdPostActionTypes.POST_MODIFY,
  params
});
