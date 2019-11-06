import { all, call } from "redux-saga/effects";
import { watchAgeRank } from "./age/saga";
import { watchScoreRank } from "./score/saga";

export function* watchRank() {
  yield all([call(watchAgeRank), call(watchScoreRank)]);
}
