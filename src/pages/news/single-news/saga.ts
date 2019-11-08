import { call, put, takeEvery } from 'redux-saga/effects';

import { INew, NewsClient } from '../../../Client';
import { BaseUrl } from '../../../config/api';
import {
    ISingleNewsGetRequest,
    SingleNewsGetActionTypes,
    SingleNewsGetDataError,
    SingleNewsGetDataSuccess,
} from './actions/single-news.get';

function* handleRequest(action: ISingleNewsGetRequest) {
  try {
    const result: INew = yield call(api, action);

    yield put(SingleNewsGetDataSuccess(result));
  } catch (err) {
    console.error(err);
    yield put(SingleNewsGetDataError(err));
  }
}

export function* watchSingleNewsGet() {
  yield takeEvery(SingleNewsGetActionTypes.REQUEST, handleRequest);
}

const api = (action: ISingleNewsGetRequest) => {
  const client = new NewsClient(BaseUrl);
  return client
    .getById(action.params.id)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};
