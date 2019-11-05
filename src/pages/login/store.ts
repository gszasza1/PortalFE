import { GenericState, genericInitialState } from "../../template/action";
import { LoginPostData, LoginPostParams } from "./actions/login.post";

export interface LoginState
  extends GenericState<LoginPostParams, LoginPostData> {}
export const initialState: LoginState = {
  ...genericInitialState(),
  data: undefined,
  params: undefined
};
