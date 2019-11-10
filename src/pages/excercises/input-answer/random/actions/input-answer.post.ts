export interface IInputAnswerPostActionTypes {
  POST_REQUEST: "InputAnswer post request";
  POST_SUCCESS: "InputAnswer post sucess";
  POST_ERROR: "InputAnswer post error";
  POST_MODIFY: "InputAnswer post modify";
}

export const InputAnswerPostActionTypes: IInputAnswerPostActionTypes = {
  POST_REQUEST: "InputAnswer post request",
  POST_SUCCESS: "InputAnswer post sucess",
  POST_ERROR: "InputAnswer post error",
  POST_MODIFY: "InputAnswer post modify"
};
export interface InputAnswerPostParams {
  id: string;
  answerId?: string;
}
export interface InputAnswerPostData {
  answerCorrect?: string;
}

//ACTIONHOZ
export interface IPostInputAnswerRequest {
  type: IInputAnswerPostActionTypes["POST_REQUEST"];
  params: InputAnswerPostParams;
}
export interface IPostInputAnswerSuccess {
  type: IInputAnswerPostActionTypes["POST_SUCCESS"];
  data: InputAnswerPostData;
}
export interface IPostInputAnswerError {
  type: IInputAnswerPostActionTypes["POST_ERROR"];
  error?: string;
}

export interface IInputAnswerModify {
  type: IInputAnswerPostActionTypes["POST_MODIFY"];
  params?: string;
}

//REDUCERHEZ
export type IPostInputAnswer =
  | IPostInputAnswerRequest
  | IPostInputAnswerSuccess
  | IPostInputAnswerError
  | IInputAnswerModify;

//ACTIONCREATORHOZ
export const postInputAnswerData = (
  params: InputAnswerPostParams
): IPostInputAnswerRequest => ({
  type: InputAnswerPostActionTypes.POST_REQUEST,
  params
});

export const postInputAnswerDataError = (
  error?: string
): IPostInputAnswerError => ({
  type: InputAnswerPostActionTypes.POST_ERROR,
  error
});
export const postInputAnswerDataSuccess = (
  data: InputAnswerPostData
): IPostInputAnswerSuccess => ({
  type: InputAnswerPostActionTypes.POST_SUCCESS,
  data
});

export const postInputAnswerDataModify = (
  params?: string
): IInputAnswerModify => ({
  type: InputAnswerPostActionTypes.POST_MODIFY,
  params
});
