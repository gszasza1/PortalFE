import { IPostLogin, LoginPostActionTypes } from "./actions/login.post";
import { initialState, LoginState } from "./store";
import {
  genericSuccessState,
  genericErrorState,
  genericRequestState
} from "../../template/action";

type Action = IPostLogin;

export const LoginReducer = (
  state = initialState,
  action: Action
): LoginState => {
  switch (action.type) {
    case LoginPostActionTypes.POST_SUCCESS: {
      state = {
        ...state,
        ...genericSuccessState({ action, state })
      };
      return state;
    }
    case LoginPostActionTypes.POST_ERROR: {
      state = {
        ...state,
        ...genericErrorState({ action, state })
      };
      return state;
    }
    case LoginPostActionTypes.POST_REQUEST: {
      state = {
        ...state,
        ...genericRequestState({ action, state })
      };
      return state;
    }

    case LoginPostActionTypes.POST_MODIFY: {
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
