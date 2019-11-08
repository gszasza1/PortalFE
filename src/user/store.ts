import { genericInitialState, GenericState } from '../template/action';
import { CheckloginData, CheckloginParams } from './actions/checkLogin.get';

export interface UserState
  extends GenericState<CheckloginParams, CheckloginData> {
  isConnected: boolean;
  currentUrl: string;
}
export const initialState: UserState = {
  ...genericInitialState(),
  isConnected: false,
  data: undefined,
  currentUrl: window.location.pathname,
  params: undefined
};
