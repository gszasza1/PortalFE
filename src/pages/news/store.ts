import { combineReducers } from 'redux';

import { CreateNewsFormReducer } from './create/reducer';
import { CreateNewsFormState } from './create/store';
import { EditNewsFormReducer } from './edit/reducer';
import { EditNewsFormState } from './edit/store';
import { NewFormReducer } from './form/reducer';
import { NewsFormState } from './form/store';
import { SingleNewsReducer } from './single-news/reducer';
import { SingleNewsState } from './single-news/store';

export interface NewsState {
  create: CreateNewsFormState;
  edit: EditNewsFormState;
  form: NewsFormState;
  singleNews: SingleNewsState;
}

export const NewsReducer = combineReducers<NewsState>({
  create: CreateNewsFormReducer,
  form: NewFormReducer,
  edit: EditNewsFormReducer,
  singleNews: SingleNewsReducer
});
