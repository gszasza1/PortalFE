import {
  IPostRegister,
  RegisterPostActionTypes
} from "./actions/register.post";
import { initialState, RegisterState } from "./store";
import {
  genericSuccessState,
  genericErrorState,
  genericRequestState
} from "../../template/action";

type Action = IPostRegister;

export const RegisterReducer = (
  state = initialState,
  action: Action
): RegisterState => {
  switch (action.type) {
    case RegisterPostActionTypes.POST_SUCCESS: {
      state = {
        ...state,
        ...genericSuccessState({ action, state })
      };
      return state;
    }
    case RegisterPostActionTypes.POST_ERROR: {
      state = {
        ...state,
        ...genericErrorState({ action, state })
      };
      return state;
    }
    case RegisterPostActionTypes.POST_REQUEST: {
      state = {
        ...state,
        ...genericRequestState({ action, state })
      };
      return state;
    }

    case RegisterPostActionTypes.POST_MODIFY: {
      state = {
        ...state,
        params: action.params
      };
      return state;
    }

    default:
      // const _check: never = action;
      return state;
  }
};
