import { INewsForm, NewsFormActionTypes } from './action/formmodify.';
import { initialState, NewsFormState } from './store';

type Action = INewsForm;
export const NewFormReducer = (
  state = initialState,
  action: Action
): NewsFormState => {
  switch (action.type) {
    case NewsFormActionTypes.MODIFY: {
      state = {
        ...state,
        ...action.params
      };
      return state;
    }
    case NewsFormActionTypes.INIT: {
      state = initialState;
      return state;
    }

    default:
      return state;
  }
};
