import { all, call } from 'redux-saga/effects';

import { watchCreateNewsForm } from './create/saga';
import { watchEditNewsFormGet, watchEditNewsFormUpdate } from './edit/saga';
import { watchNewsList } from './list/saga';
import { watchSingleNewsGet } from './single-news/saga';

export function* watchNews() {
  yield all([
    call(watchCreateNewsForm),
    call(watchSingleNewsGet),
    call(watchNewsList),
    call(watchEditNewsFormUpdate),
    call(watchEditNewsFormGet)
  ]);
}
