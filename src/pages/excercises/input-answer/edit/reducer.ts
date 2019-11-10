import { genericErrorState, genericRequestState, genericSuccessState } from '../../../../template/action';
import { EditInputExcerciseFormActionTypes, IEditInputExcerciseForm } from './actions/edit.put';
import { EditInputExcerciseFormState, initialState } from './store';

type Action = IEditInputExcerciseForm;
export const EditInputExcerciseFormReducer = (
  state = initialState,
  action: Action
): EditInputExcerciseFormState => {
  switch (action.type) {
    case EditInputExcerciseFormActionTypes.REQUEST: {
      state = {
        ...state,
        ...genericRequestState({ action, state })
      };
      return state;
    }
    case EditInputExcerciseFormActionTypes.SUCCESS: {
      state = {
        ...state,
        ...genericSuccessState({ action, state })
      };
      return state;
    }

    case EditInputExcerciseFormActionTypes.ERROR: {
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
