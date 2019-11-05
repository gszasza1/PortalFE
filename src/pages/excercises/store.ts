import { combineReducers } from "redux";

import { AbcdState } from "./abcd";
import { InputAnswerState } from "./input-answer";
import { abcdReducer } from "./abcd/reducer";
import { inputAnswerReducer } from "./input-answer/reducer";

export interface ExcercisesState {
  abcd: AbcdState;
  inputAnswer: InputAnswerState;
}

export const ExcercisesReducer = combineReducers<ExcercisesState>({
  abcd: abcdReducer,
  inputAnswer: inputAnswerReducer
});
