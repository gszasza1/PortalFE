import { ISendInputExcercise } from '../../../../../Client';

export interface IInputExcerciseFormActionTypes {
  MODIFY: "InputExcercise Form mofify";
  INIT: "InputExcercise Form init";
}

export const InputExcerciseFormActionTypes: IInputExcerciseFormActionTypes = {
  MODIFY: "InputExcercise Form mofify",
  INIT: "InputExcercise Form init"
};
export interface InputExcerciseFormParams extends ISendInputExcercise {}

//ACTIONHOZ
export interface IInputExcerciseFormModify {
  type: IInputExcerciseFormActionTypes["MODIFY"];
  params: InputExcerciseFormParams;
}
export interface IInputExcerciseFormInit {
  type: IInputExcerciseFormActionTypes["INIT"];
}

//REDUCERHEZ
export type IInputExcerciseForm =
  | IInputExcerciseFormModify
  | IInputExcerciseFormInit;

//ACTIONCREATORHOZ
export const modifyInputExcerciseForm = (
  params: InputExcerciseFormParams
): IInputExcerciseFormModify => ({
  type: InputExcerciseFormActionTypes.MODIFY,
  params
});

export const initInputExcerciseForm = (): IInputExcerciseFormInit => ({
  type: InputExcerciseFormActionTypes.INIT
});
