import { combineReducers } from 'redux';

import { AbcdState } from './abcd';
import { abcdReducer } from './abcd/reducer';
import { InputExcerciseReducer, InputExcerciseState } from './input-answer/store';

export interface ExcercisesState {
  abcd: AbcdState;
  inputAnswer: InputExcerciseState;
}

export const ExcercisesReducer = combineReducers<ExcercisesState>({
  abcd: abcdReducer,
  inputAnswer: InputExcerciseReducer
});
