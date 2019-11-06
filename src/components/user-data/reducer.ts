import { genericErrorState, genericRequestState, genericSuccessState } from '../../template/action';
import { IUserData, UserDataActionTypes } from './actions/user-data.get';
import { initialState, UserDataState } from './store';

export const UserDataReducer = (
  state = initialState,
  action: IUserData
): UserDataState => {
  switch (action.type) {
    case UserDataActionTypes.SUCCESS: {
      state = {
        ...genericSuccessState({ action, state })
      };
      return state;
    }
    case UserDataActionTypes.ERROR: {
      state = {
        ...genericErrorState({ action, state })
      };
      return state;
    }
    case UserDataActionTypes.REQUEST: {
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
