import { GenericState, genericInitialState } from "../../template/action";
import { RegisterPostParams, RegisterPostData } from "./actions/register.post";

export interface RegisterState
  extends GenericState<RegisterPostParams, RegisterPostData> {}
export const initialState: RegisterState = {
  ...genericInitialState(),
  data: undefined,
  params: undefined
};
