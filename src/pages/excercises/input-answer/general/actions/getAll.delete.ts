export interface IDeleteAllInputExcerciseActionTypes {
  REQUEST: "Delete All InputExcercise request";
  SUCCESS: "Delete All InputExcercise sucess";
  ERROR: "Delete All InputExcercise error";
}

export const DeleteAllInputExcerciseActionTypes: IDeleteAllInputExcerciseActionTypes = {
  REQUEST: "Delete All InputExcercise request",
  SUCCESS: "Delete All InputExcercise sucess",
  ERROR: "Delete All InputExcercise error"
};
export interface DeleteAllInputExcerciseParams {
  id: number;
}
export interface DeleteAllInputExcerciseData {
  id: number;
}

//ACTIONHOZ
export interface IDeleteAllInputExcerciseRequest {
  type: IDeleteAllInputExcerciseActionTypes["REQUEST"];
  params: DeleteAllInputExcerciseParams;
}
export interface IDeleteAllInputExcerciseSuccess {
  type: IDeleteAllInputExcerciseActionTypes["SUCCESS"];
  data: DeleteAllInputExcerciseData;
}
export interface IDeleteAllInputExcerciseError {
  type: IDeleteAllInputExcerciseActionTypes["ERROR"];
  error?: string;
}

//REDUCERHEZ
export type IDeleteAllInputExcercise =
  | IDeleteAllInputExcerciseRequest
  | IDeleteAllInputExcerciseSuccess
  | IDeleteAllInputExcerciseError;

//ACTIONCREATORHOZ
export const DeleteAllInputExcerciseData = (
  params: DeleteAllInputExcerciseParams
): IDeleteAllInputExcerciseRequest => ({
  type: DeleteAllInputExcerciseActionTypes.REQUEST,
  params
});

export const DeleteAllInputExcerciseDataError = (
  error?: string
): IDeleteAllInputExcerciseError => ({
  type: DeleteAllInputExcerciseActionTypes.ERROR,
  error
});
export const DeleteAllInputExcerciseDataSuccess = (
  data: DeleteAllInputExcerciseData
): IDeleteAllInputExcerciseSuccess => ({
  type: DeleteAllInputExcerciseActionTypes.SUCCESS,
  data
});
