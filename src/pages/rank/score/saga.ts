import { put, takeEvery, all, call } from "redux-saga/effects";
import {
  IScoreRankRequest,
  getScoreRankDataSuccess,
  getScoreRankDataError,
  ScoreRankActionTypes
} from ".";
import { BaseUrl } from "../../../config/api";
import { AccountClient } from "../../../Client";

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
