import { genericInitialState, GenericState } from '../../../template/action';
import { EditNewsFormData, EditNewsFormParams } from './actions/edit.put';

export interface EditNewsFormState
  extends GenericState<EditNewsFormParams, EditNewsFormData> {}
export const initialState: EditNewsFormState = {
  ...genericInitialState(),
  data: undefined,
  params: undefined
};
