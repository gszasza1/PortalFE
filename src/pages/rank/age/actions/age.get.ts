import { RankUsersOfInteger, IRankUsersOfInteger } from "../../../../Client";

export interface IAgeRankActionTypes {
  REQUEST: "AgeRank request";
  SUCCESS: "AgeRank sucess";
  ERROR: "AgeRank error";
}

export const AgeRankActionTypes: IAgeRankActionTypes = {
  REQUEST: "AgeRank request",
  SUCCESS: "AgeRank sucess",
  ERROR: "AgeRank error"
};
export interface AgeRankParams {
  by: number | undefined;
  totalResult: number | undefined;
}
export interface AgeRankData {
  data?: IRankUsersOfInteger[];
}

//ACTIONHOZ
export interface IAgeRankRequest {
  type: IAgeRankActionTypes["REQUEST"];
  params: AgeRankParams;
}
export interface IAgeRankSuccess {
  type: IAgeRankActionTypes["SUCCESS"];
  data: AgeRankData;
}
export interface IAgeRankError {
  type: IAgeRankActionTypes["ERROR"];
  error?: string;
}

//REDUCERHEZ
export type IAgeRank = IAgeRankRequest | IAgeRankSuccess | IAgeRankError;

//ACTIONCREATORHOZ
export const getAgeRankData = (params: AgeRankParams): IAgeRankRequest => ({
  type: AgeRankActionTypes.REQUEST,
  params
});

export const getAgeRankDataError = (error?: string): IAgeRankError => ({
  type: AgeRankActionTypes.ERROR,
  error
});
export const getAgeRankDataSuccess = (data: AgeRankData): IAgeRankSuccess => ({
  type: AgeRankActionTypes.SUCCESS,
  data
});
