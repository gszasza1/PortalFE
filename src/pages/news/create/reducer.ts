import { genericErrorState, genericRequestState, genericSuccessState } from '../../../template/action';
import { CreateNewsFormActionTypes, ICreateNewsForm } from './actions/create.post';
import { CreateNewsFormState, initialState } from './store';

type Action = ICreateNewsForm;
export const CreateNewsFormReducer = (
  state = initialState,
  action: Action
): CreateNewsFormState => {
  switch (action.type) {
    case CreateNewsFormActionTypes.REQUEST: {
      state = {
        ...state,
        ...genericRequestState({ action, state })
      };
      return state;
    }
    case CreateNewsFormActionTypes.SUCCESS: {
      state = {
        ...state,
        ...genericSuccessState({ action, state })
      };
      return state;
    }

    case CreateNewsFormActionTypes.ERROR: {
      state = {
        ...state,
        ...genericErrorState({ action, state })
      };
      return state;
    }

    default:
      return state;
  }
};
