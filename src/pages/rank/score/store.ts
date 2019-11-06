import { genericInitialState, GenericState } from "../../../template/action";
import { ScoreRankParams, ScoreRankData } from ".";

export interface ScoreRankState
  extends GenericState<ScoreRankParams, ScoreRankData> {}
export const initialState: ScoreRankState = {
  ...genericInitialState(),
  data: undefined,
  params: undefined
};
