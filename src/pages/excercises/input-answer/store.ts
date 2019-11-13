import { combineReducers } from 'redux';

import { CreateInputExcerciseFormReducer } from './create/reducer';
import { CreateInputExcerciseFormState } from './create/store';
import { EditInputExcerciseFormReducer } from './edit/reducer';
import { EditInputExcerciseFormState } from './edit/store';
import { InputExcerciseFormReducer } from './form/reducer';
import { InputExcerciseFormState } from './form/store';
import { GetAllInputExcerciseReducer } from './general/reducer';
import { GetAllInputExcerciseState } from './general/store';
import { RandomState } from './random';
import { RandomStateReducer } from './random/reducer';

export interface InputExcerciseState {
  form: InputExcerciseFormState;
  random: RandomState;
  create: CreateInputExcerciseFormState;
  edit: EditInputExcerciseFormState;
  list: GetAllInputExcerciseState;
}
export const InputExcerciseReducer = combineReducers<InputExcerciseState>({
  form: InputExcerciseFormReducer,
  random: RandomStateReducer,
  create: CreateInputExcerciseFormReducer,
  edit: EditInputExcerciseFormReducer,
  list: GetAllInputExcerciseReducer
});
