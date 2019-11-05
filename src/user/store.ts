import { GenericState, genericInitialState } from "../template/action";
import { CheckloginData, CheckloginParams } from "./actions/checkLogin.get";

export interface UserState
  extends GenericState<CheckloginParams, CheckloginData> {
  isConnected: boolean;
}
export const initialState: UserState = {
  ...genericInitialState(),
  isConnected: false,
  data: undefined,
  params: undefined
};
