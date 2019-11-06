import { GenericState, genericInitialState } from "../../../template/action";
import { welcomePageData, welcomePageParams } from "./actions/welcome.get";

export interface welcomePageState
  extends GenericState<welcomePageParams, welcomePageData> {}
export const initialState: welcomePageState = {
  ...genericInitialState(),
  data: undefined,
  params: undefined
};
