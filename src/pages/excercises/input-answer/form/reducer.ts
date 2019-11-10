import { GetEditInputExcerciseFormActionTypes, IGetEditInputExcerciseForm } from '../edit/actions/edit.get';
import { IInputExcerciseForm, InputExcerciseFormActionTypes } from './action/formmodify.';
import { initialState, InputExcerciseFormState } from './store';

type Action = IInputExcerciseForm | IGetEditInputExcerciseForm;
export const InputExcerciseFormReducer = (
  state = initialState,
  action: Action
): InputExcerciseFormState => {
  switch (action.type) {
    case InputExcerciseFormActionTypes.MODIFY: {
      state = {
        ...state,
        ...action.params
      };
      return state;
    }
    case InputExcerciseFormActionTypes.INIT: {
      state = initialState;
      return state;
    }
    case GetEditInputExcerciseFormActionTypes.SUCCESS: {
      state = {
        ...state,
        ...action.data
      };
      return state;
    }

    default:
      return state;
  }
};
