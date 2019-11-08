import { initialState, UserState } from '.';
import { IPostLogin, LoginPostActionTypes } from '../pages/login/actions/login.post';
import { genericErrorState, genericRequestState, genericSuccessState } from '../template/action';
import { CheckloginActionTypes, IChecklogin } from './actions/checkLogin.get';

type Action = IChecklogin | IPostLogin;
export const userReducer = (
  state = initialState,
  action: Action
): UserState => {
  switch (action.type) {
    case CheckloginActionTypes.REQUEST: {
      state = {
        ...state,
        ...genericRequestState({ action, state })
      };
      return state;
    }
    case CheckloginActionTypes.ERROR: {
      state = {
        ...state,
        ...genericErrorState({ action, state })
      };
      return state;
    }
    case CheckloginActionTypes.SUCCESS: {
      state = {
        ...state,
        ...genericSuccessState({ action, state }),
        isConnected: true
      };
      return state;
    }
    case LoginPostActionTypes.POST_SUCCESS: {
      state = {
        ...state,
        isConnected: true
      };
      return state;
    }
    default:
      return state;
  }
};
