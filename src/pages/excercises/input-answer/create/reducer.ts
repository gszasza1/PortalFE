import { genericErrorState, genericRequestState, genericSuccessState } from '../../../../template/action';
import { CreateInputExcerciseFormActionTypes, ICreateInputExcerciseForm } from './actions/create.post';
import { CreateInputExcerciseFormState, initialState } from './store';

type Action = ICreateInputExcerciseForm;
export const CreateInputExcerciseFormReducer = (
  state = initialState,
  action: Action
): CreateInputExcerciseFormState => {
  switch (action.type) {
    case CreateInputExcerciseFormActionTypes.REQUEST: {
      state = {
        ...state,
        ...genericRequestState({ action, state })
      };
      return state;
    }
    case CreateInputExcerciseFormActionTypes.SUCCESS: {
      state = {
        ...state,
        ...genericSuccessState({ action, state })
      };
      return state;
    }

    case CreateInputExcerciseFormActionTypes.ERROR: {
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
