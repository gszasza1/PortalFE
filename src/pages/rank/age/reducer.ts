import {
  genericRequestState,
  genericSuccessState,
  genericErrorState
} from "../../../template/action";

import { IAgeRank, AgeRankActionTypes } from "./actions/age.get";
import { initialState, AgeRankState } from "./store";

type Action = IAgeRank;

export const AgeRankReducer = (
  state = initialState,
  action: Action
): AgeRankState => {
  switch (action.type) {
    case AgeRankActionTypes.SUCCESS: {
      state = {
        ...state,
        ...genericSuccessState({ action, state })
      };

      return state;
    }
    case AgeRankActionTypes.ERROR: {
      state = {
        ...state,
        ...genericErrorState({ action, state })
      };
      return state;
    }
    case AgeRankActionTypes.REQUEST: {
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
