import { InputExcerciseFormParams } from './action/formmodify.';

export interface InputExcerciseFormState extends InputExcerciseFormParams {}

export const initialState: InputExcerciseFormState = {
  age: 0,
  correctAnswer: "",
  helpForAnswer: "",
  question: "",
  timeForAnswer: 0
};
