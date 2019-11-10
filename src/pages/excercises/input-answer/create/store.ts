import { genericInitialState, GenericState } from '../../../../template/action';
import { CreateInputExcerciseFormData, CreateInputExcerciseFormParams } from './actions/create.post';

export interface CreateInputExcerciseFormState
  extends GenericState<
    CreateInputExcerciseFormParams,
    CreateInputExcerciseFormData
  > {}
export const initialState: CreateInputExcerciseFormState = {
  ...genericInitialState(),
  data: undefined,
  params: undefined
};
