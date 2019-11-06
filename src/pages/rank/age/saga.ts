import { call, put, takeEvery } from 'redux-saga/effects';

import { AgeRankActionTypes, getAgeRankDataError, getAgeRankDataSuccess, IAgeRankRequest } from '.';
import { AccountClient } from '../../../Client';
import { BaseUrl } from '../../../config/api';

function* handleRequest(action: IAgeRankRequest) {
  try {
    const result = yield call(api, action);

    yield put(getAgeRankDataSuccess({ data: result }));
  } catch (err) {
    console.error(err);
    yield put(getAgeRankDataError(err));
  }
}

export function* watchAgeRank() {
  yield takeEvery(AgeRankActionTypes.REQUEST, handleRequest);
}
const api = (action: IAgeRankRequest) => {
  const client = new AccountClient(BaseUrl);
  return client
    .getRankListByAge(action.params.by, (action.params.totalResult = 10))
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};
