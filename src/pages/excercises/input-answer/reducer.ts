import {
  genericRequestState,
  genericSuccessState,
  genericErrorState
} from "../../../template/action";

import {
  IInputAnswer,
  InputAnswerActionTypes
} from "./actions/input-answer.get";
import { initialState, InputAnswerState } from "./store";
import { IPostInputAnswer, InputAnswerPostActionTypes } from "./actions/input-answer.post";

type Action = IInputAnswer | IPostInputAnswer;

export const inputAnswerReducer = (
  state = initialState,
  action: Action
): InputAnswerState => {
  switch (action.type) {
    case InputAnswerActionTypes.SUCCESS: {
      state = {
        ...state,
        ...genericSuccessState({ action, state }),
        postSentNumber: 0,
        postParams: undefined,
        postData: undefined
      };
      return state;
    }
    case InputAnswerActionTypes.ERROR: {
      state = {
        ...state,
        ...genericErrorState({ action, state })
      };
      return state;
    }
    case InputAnswerActionTypes.REQUEST: {
      state = {
        ...state,
        ...genericRequestState({ action, state }),
        postData: undefined,
        postParams: undefined,
        data: undefined
      };
      return state;
    }

    case InputAnswerPostActionTypes.POST_MODIFY: {
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
    case InputAnswerPostActionTypes.POST_SUCCESS: {
      state = {
        ...state,
        postData: action.data
      };
      return state;
    }
    case InputAnswerPostActionTypes.POST_ERROR: {
      state = {
        ...state,
        error: action.error
      };
      return state;
    }
    case InputAnswerPostActionTypes.POST_REQUEST: {
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
