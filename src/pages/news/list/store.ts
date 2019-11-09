import { genericInitialState, GenericState } from '../../../template/action';
import { NewsListData, NewsListParams } from './actions/list.get';

export interface NewsListState
  extends GenericState<NewsListParams, NewsListData> {}
export const initialState: NewsListState = {
  ...genericInitialState(),
  data: undefined,
  params: undefined
};
