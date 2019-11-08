import { all, call } from 'redux-saga/effects';

import { watchCreateNewsForm } from './create/saga';
import { watchSingleNewsGet } from './single-news/saga';

export function* watchNews() {
  yield all([call(watchCreateNewsForm), call(watchSingleNewsGet)]);
}
