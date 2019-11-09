import { call, put, takeEvery } from 'redux-saga/effects';

import { getScoreRankDataError, getScoreRankDataSuccess, IScoreRankRequest, ScoreRankActionTypes } from '.';
import { AccountClient } from '../../../Client';
import { BaseUrl } from '../../../config/api';

function* handleRequest(action: IScoreRankRequest) {
  try {
    const result = yield call(api, action);

    yield put(getScoreRankDataSuccess({ data: result }));
  } catch (err) {
    console.error(err);
    yield put(getScoreRankDataError(err));
  }
}

export function* watchScoreRank() {
  yield takeEvery(ScoreRankActionTypes.REQUEST, handleRequest);
}
const api = (action: IScoreRankRequest) => {
  const client = new AccountClient(BaseUrl);
  return client
    .getRankListByScore(action.params.by, (action.params.totalResult = 10))
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};
