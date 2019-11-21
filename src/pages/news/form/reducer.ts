import { GetEditNewsFormActionTypes, IGetEditNewsForm } from '../edit/actions/edit.get';
import { INewsForm, NewsFormActionTypes } from './action/formmodify.';
import { initialState, NewsFormState } from './store';

type Action = INewsForm | IGetEditNewsForm;
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
    case GetEditNewsFormActionTypes.SUCCESS: {
      state = {
        ...state,
        description: action.data.description,
        link: action.data.link,
        title: action.data.title
      };
      return state;
    }

    default:
      return state;
  }
};
