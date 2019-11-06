import { genericInitialState, GenericState } from "../../../template/action";
import { AgeRankParams, AgeRankData } from ".";

export interface AgeRankState
  extends GenericState<AgeRankParams, AgeRankData> {}
export const initialState: AgeRankState = {
  ...genericInitialState(),
  data: undefined,
  params: undefined
};
