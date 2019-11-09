import { genericErrorState, genericRequestState, genericSuccessState } from '../../../template/action';
import { INewsList, NewsListActionTypes } from './actions/list.get';
import { initialState, NewsListState } from './store';

export const NewsListReducer = (
  state = initialState,
  action: INewsList
): NewsListState => {
  switch (action.type) {
    case NewsListActionTypes.SUCCESS: {
      state = {
        ...genericSuccessState({ action, state })
      };
      return state;
    }
    case NewsListActionTypes.ERROR: {
      state = {
        ...genericErrorState({ action, state })
      };
      return state;
    }
    case NewsListActionTypes.REQUEST: {
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
