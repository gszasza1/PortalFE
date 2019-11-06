import {
  genericRequestState,
  genericSuccessState,
  genericErrorState
} from "../../../template/action";

import { IScoreRank, ScoreRankActionTypes } from "./actions/score.get";
import { initialState, ScoreRankState } from "./store";

type Action = IScoreRank;

export const ScoreRankReducer = (
  state = initialState,
  action: Action
): ScoreRankState => {
  switch (action.type) {
    case ScoreRankActionTypes.SUCCESS: {
      state = {
        ...state,
        ...genericSuccessState({ action, state })
      };

      return state;
    }
    case ScoreRankActionTypes.ERROR: {
      state = {
        ...state,
        ...genericErrorState({ action, state })
      };
      return state;
    }
    case ScoreRankActionTypes.REQUEST: {
      state = {
        ...state,
        ...genericRequestState({ action, state })
      };
      return state;
    }

    default:
      // const _check: never = action;
      return state;
  }
};
