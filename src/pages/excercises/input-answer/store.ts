import { combineReducers } from 'redux';

import { CreateInputExcerciseFormReducer } from './create/reducer';
import { CreateInputExcerciseFormState } from './create/store';
import { EditInputExcerciseFormReducer } from './edit/reducer';
import { EditInputExcerciseFormState } from './edit/store';
import { InputExcerciseFormReducer } from './form/reducer';
import { InputExcerciseFormState } from './form/store';
import { RandomState } from './random';
import { RandomStateReducer } from './random/reducer';

export interface InputExcerciseState {
  form: InputExcerciseFormState;
  random: RandomState;
  create: CreateInputExcerciseFormState;
  edit: EditInputExcerciseFormState;
}
export const InputExcerciseReducer = combineReducers<InputExcerciseState>({
  form: InputExcerciseFormReducer,
  random: RandomStateReducer,
  create: CreateInputExcerciseFormReducer,
  edit: EditInputExcerciseFormReducer
});
