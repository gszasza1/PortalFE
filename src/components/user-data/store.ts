import { genericInitialState, GenericState } from '../../template/action';
import { UserDataData, UserDataParams } from './actions/user-data.get';

export interface UserDataState
  extends GenericState<UserDataParams, UserDataData> {}
export const initialState: UserDataState = {
  ...genericInitialState(),
  data: undefined,
  params: undefined
};
