import { IRankUsersOfInteger } from "../../../../Client";

export interface IScoreRankActionTypes {
  REQUEST: "ScoreRank request";
  SUCCESS: "ScoreRank sucess";
  ERROR: "ScoreRank error";
}

export const ScoreRankActionTypes: IScoreRankActionTypes = {
  REQUEST: "ScoreRank request",
  SUCCESS: "ScoreRank sucess",
  ERROR: "ScoreRank error"
};
export interface ScoreRankParams {
  by: number | undefined;
  totalResult: number | undefined;
}
export interface ScoreRankData {
  data?: IRankUsersOfInteger[];
}

//ACTIONHOZ
export interface IScoreRankRequest {
  type: IScoreRankActionTypes["REQUEST"];
  params: ScoreRankParams;
}
export interface IScoreRankSuccess {
  type: IScoreRankActionTypes["SUCCESS"];
  data: ScoreRankData;
}
export interface IScoreRankError {
  type: IScoreRankActionTypes["ERROR"];
  error?: string;
}

//REDUCERHEZ
export type IScoreRank =
  | IScoreRankRequest
  | IScoreRankSuccess
  | IScoreRankError;

//ACTIONCREATORHOZ
export const getScoreRankData = (
  params: ScoreRankParams
): IScoreRankRequest => ({
  type: ScoreRankActionTypes.REQUEST,
  params
});

export const getScoreRankDataError = (error?: string): IScoreRankError => ({
  type: ScoreRankActionTypes.ERROR,
  error
});
export const getScoreRankDataSuccess = (
  data: ScoreRankData
): IScoreRankSuccess => ({
  type: ScoreRankActionTypes.SUCCESS,
  data
});
