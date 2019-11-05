import {
  genericRequestState,
  genericSuccessState,
  genericErrorState
} from "../../../template/action";

import { IAbcd, AbcdActionTypes } from "./actions/abcd.get";
import { initialState, AbcdState } from "./store";
import { IPostAbcd, AbcdPostActionTypes } from "./actions/abcd.post";

type Action = IAbcd | IPostAbcd;

export const abcdReducer = (
  state = initialState,
  action: Action
): AbcdState => {
  switch (action.type) {
    case AbcdActionTypes.SUCCESS: {
      state = {
        ...state,
        ...genericSuccessState({ action, state }),
        postSentNumber:0,
        postParams:undefined,
        postData:undefined,
      };
      return state;
    }
    case AbcdActionTypes.ERROR: {
      state = {
        ...state,
        ...genericErrorState({ action, state })
      };
      return state;
    }
    case AbcdActionTypes.REQUEST: {
      state = {
        ...state,
        ...genericRequestState({ action, state }),
        postData: undefined,
        postParams: undefined,
        data: undefined
      };
      return state;
    }

    case AbcdPostActionTypes.POST_MODIFY: {
      state = {
        ...state,
        postParams: state.postParams
          ? {
              ...state.postParams,
              answerId: action.params
            }
          : {
              id: state.data ? state.data.data.id : "",
              answerId: action.params
            }
      };
      return state;
    }
    case AbcdPostActionTypes.POST_SUCCESS: {
      state = {
        ...state,
        postData: action.data
      };
      return state;
    }
    case AbcdPostActionTypes.POST_ERROR: {
      state = {
        ...state,
        error: action.error
      };
      return state;
    }
    case AbcdPostActionTypes.POST_REQUEST: {
      state = {
        ...state,
        postSentNumber: state.postSentNumber + 1
      };
      return state;
    }
    default:
      // const _check: never = action;
      return state;
  }
};
