interface AbcdExcercise {
  id: string;
  text: string;
  answers: Array<{
    id: string;
    answer: string;
  }>;
}

export interface IAbcdActionTypes {
  REQUEST: "Abcd request";
  SUCCESS: "Abcd sucess";
  ERROR: "Abcd error";
}

export const AbcdActionTypes: IAbcdActionTypes = {
  REQUEST: "Abcd request",
  SUCCESS: "Abcd sucess",
  ERROR: "Abcd error"
};
export interface AbcdParams {}
export interface AbcdData {
  data: AbcdExcercise;
}

//ACTIONHOZ
export interface IAbcdRequest {
  type: IAbcdActionTypes["REQUEST"];
  params: AbcdParams;
}
export interface IAbcdSuccess {
  type: IAbcdActionTypes["SUCCESS"];
  data: AbcdData;
}
export interface IAbcdError {
  type: IAbcdActionTypes["ERROR"];
  error?: string;
}

//REDUCERHEZ
export type IAbcd = IAbcdRequest | IAbcdSuccess | IAbcdError;

//ACTIONCREATORHOZ
export const getAbcdData = (params: AbcdParams): IAbcdRequest => ({
  type: AbcdActionTypes.REQUEST,
  params
});

export const getAbcdDataError = (error?: string): IAbcdError => ({
  type: AbcdActionTypes.ERROR,
  error
});
export const getAbcdDataSuccess = (data: AbcdData): IAbcdSuccess => ({
  type: AbcdActionTypes.SUCCESS,
  data
});
