import { genericErrorState, genericRequestState, genericSuccessState } from '../../../template/action';
import { EditNewsFormActionTypes, IEditNewsForm } from './actions/edit.put';
import { EditNewsFormState, initialState } from './store';

type Action = IEditNewsForm;
export const EditNewsFormReducer = (
  state = initialState,
  action: Action
): EditNewsFormState => {
  switch (action.type) {
    case EditNewsFormActionTypes.REQUEST: {
      state = {
        ...state,
        ...genericRequestState({ action, state })
      };
      return state;
    }
    case EditNewsFormActionTypes.SUCCESS: {
      state = {
        ...state,
        ...genericSuccessState({ action, state })
      };
      return state;
    }

    case EditNewsFormActionTypes.ERROR: {
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
