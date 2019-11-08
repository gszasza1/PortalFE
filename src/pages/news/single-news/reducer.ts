import { genericErrorState, genericRequestState, genericSuccessState } from '../../../template/action';
import { ISingleNewsGet, SingleNewsGetActionTypes } from './actions/single-news.get';
import { initialState, SingleNewsState } from './store';

type Action = ISingleNewsGet;

export const SingleNewsReducer = (
  state = initialState,
  action: Action
): SingleNewsState => {
  switch (action.type) {
    case SingleNewsGetActionTypes.SUCCESS: {
      state = {
        ...state,
        ...genericSuccessState({ action, state })
      };
      return state;
    }
    case SingleNewsGetActionTypes.ERROR: {
      state = {
        ...state,
        ...genericErrorState({ action, state })
      };
      return state;
    }
    case SingleNewsGetActionTypes.REQUEST: {
      state = {
        ...state,
        ...genericRequestState({ action, state })
      };
      return state;
    }

    default:
      // const check: never = action;
      return state;
  }
};
