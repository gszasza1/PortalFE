import { initialState, welcomePageState } from "./store";
import { IWelcomePage, WelcomePageActionTypes } from "./actions/welcome.get";
import {
  genericRequestState,
  genericSuccessState,
  genericErrorState
} from "../../../template/action";

export const welcomePageReducer = (
  state = initialState,
  action: IWelcomePage
): welcomePageState => {
  switch (action.type) {
    case WelcomePageActionTypes.SUCCESS: {
      state = {
        ...genericSuccessState({ action, state })
      };
      return state;
    }
    case WelcomePageActionTypes.ERROR: {
      state = {
        ...genericErrorState({ action, state })
      };
      return state;
    }
    case WelcomePageActionTypes.REQUEST: {
      state = {
        ...genericRequestState({ action, state })
      };
      return state;
    }
    default:
      // const _check: never = action;
      return state;
  }
};
