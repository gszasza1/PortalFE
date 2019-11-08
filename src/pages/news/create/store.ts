import { genericInitialState, GenericState } from '../../../template/action';
import { CreateNewsFormData, CreateNewsFormParams } from './actions/create.post';

export interface CreateNewsFormState
  extends GenericState<CreateNewsFormParams, CreateNewsFormData> {}
export const initialState: CreateNewsFormState = {
  ...genericInitialState(),
  data: undefined,
  params: undefined
};
