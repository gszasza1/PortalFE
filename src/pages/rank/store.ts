import { combineReducers } from "redux";

import { AgeRankState } from "./age";
import { AgeRankReducer } from "./age/reducer";
import { ScoreRankState } from "./score";
import { ScoreRankReducer } from "./score/reducer";

export interface RankState {
  age: AgeRankState;
  score: ScoreRankState;
}

export const RankReducer = combineReducers<RankState>({
  age: AgeRankReducer,
  score: ScoreRankReducer
});
