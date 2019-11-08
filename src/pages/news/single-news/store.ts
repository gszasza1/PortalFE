import { genericInitialState, GenericState } from '../../../template/action';
import { SingleNewsGetData, SingleNewsGetParams } from './actions/single-news.get';

export interface SingleNewsState
  extends GenericState<SingleNewsGetParams, SingleNewsGetData> {}
export const initialState: SingleNewsState = {
  ...genericInitialState(),
  data: undefined,
  params: undefined
};
