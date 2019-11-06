import { IProfileInfo } from '../../../Client';

export interface IUserDataActionTypes {
  REQUEST: "UserData request";
  SUCCESS: "UserData sucess";
  ERROR: "UserData error";
}

export const UserDataActionTypes: IUserDataActionTypes = {
  REQUEST: "UserData request",
  SUCCESS: "UserData sucess",
  ERROR: "UserData error"
};
export interface UserDataParams {}
export interface UserDataData extends IProfileInfo {}

//ACTIONHOZ
export interface IUserDataRequest {
  type: IUserDataActionTypes["REQUEST"];
  params: UserDataParams;
}
export interface IUserDataSuccess {
  type: IUserDataActionTypes["SUCCESS"];
  data: UserDataData;
}
export interface IUserDataError {
  type: IUserDataActionTypes["ERROR"];
  error?: string;
}

//REDUCERHEZ
export type IUserData = IUserDataRequest | IUserDataSuccess | IUserDataError;

//ACTIONCREATORHOZ
export const getUserDataData = (params: UserDataParams): IUserDataRequest => ({
  type: UserDataActionTypes.REQUEST,
  params
});

export const getUserDataDataError = (error?: string): IUserDataError => ({
  type: UserDataActionTypes.ERROR,
  error
});
export const getUserDataDataSuccess = (
  data: UserDataData
): IUserDataSuccess => ({
  type: UserDataActionTypes.SUCCESS,
  data
});
