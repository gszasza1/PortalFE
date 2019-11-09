import { call, put, takeEvery } from 'redux-saga/effects';

import { NewsClient } from '../../../Client';
import { BaseUrl } from '../../../config/api';
import { getNewsListDataError, getNewsListDataSuccess, INewsListRequest, NewsListActionTypes } from './actions/list.get';

function* handleRequest(action: INewsListRequest) {
  try {
    const result = yield call(api, action);

    yield put(getNewsListDataSuccess({ data: result }));
  } catch (err) {
    yield put(getNewsListDataError(err));
  }
}

export function* watchNewsList() {
  yield takeEvery(NewsListActionTypes.REQUEST, handleRequest);
}
const api = (action: INewsListRequest) => {
  const client = new NewsClient(BaseUrl);
  return client
    .get(99999)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};
