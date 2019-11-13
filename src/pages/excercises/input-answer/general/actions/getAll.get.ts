import { IMinimizedInputExcercise } from '../../../../../Client';

export interface IGetAllInputExcerciseActionTypes {
  REQUEST: "Get All InputExcercise request";
  SUCCESS: "Get All InputExcercise sucess";
  ERROR: "Get All InputExcercise error";
}

export const GetAllInputExcerciseActionTypes: IGetAllInputExcerciseActionTypes = {
  REQUEST: "Get All InputExcercise request",
  SUCCESS: "Get All InputExcercise sucess",
  ERROR: "Get All InputExcercise error"
};
export interface GetAllInputExcerciseParams {}
export interface GetAllInputExcerciseData {
  data?: IMinimizedInputExcercise[];
}

//ACTIONHOZ
export interface IGetAllInputExcerciseRequest {
  type: IGetAllInputExcerciseActionTypes["REQUEST"];
  params: GetAllInputExcerciseParams;
}
export interface IGetAllInputExcerciseSuccess {
  type: IGetAllInputExcerciseActionTypes["SUCCESS"];
  data: GetAllInputExcerciseData;
}
export interface IGetAllInputExcerciseError {
  type: IGetAllInputExcerciseActionTypes["ERROR"];
  error?: string;
}

//REDUCERHEZ
export type IGetAllInputExcercise =
  | IGetAllInputExcerciseRequest
  | IGetAllInputExcerciseSuccess
  | IGetAllInputExcerciseError;

//ACTIONCREATORHOZ
export const GetAllInputExcerciseData = (
  params: GetAllInputExcerciseParams
): IGetAllInputExcerciseRequest => ({
  type: GetAllInputExcerciseActionTypes.REQUEST,
  params
});

export const GetAllInputExcerciseDataError = (
  error?: string
): IGetAllInputExcerciseError => ({
  type: GetAllInputExcerciseActionTypes.ERROR,
  error
});
export const GetAllInputExcerciseDataSuccess = (
  data: GetAllInputExcerciseData
): IGetAllInputExcerciseSuccess => ({
  type: GetAllInputExcerciseActionTypes.SUCCESS,
  data
});
