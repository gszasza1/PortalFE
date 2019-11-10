import { genericInitialState, GenericState } from '../../../../template/action';
import { GetEditInputExcerciseFormData, GetEditInputExcerciseFormParams } from './actions/edit.get';

export interface EditInputExcerciseFormState
  extends GenericState<
  GetEditInputExcerciseFormParams,
  GetEditInputExcerciseFormData
  > {}
export const initialState: EditInputExcerciseFormState = {
  ...genericInitialState(),
  data: undefined,
  params: undefined
};
