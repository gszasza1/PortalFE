import { all, call } from "redux-saga/effects";
import { watchAbcd } from "./abcd/saga";
import { watchInputAnswer } from "./input-answer/saga";

export function* watchExcercises() {
  yield all([call(watchAbcd), call(watchInputAnswer)]);
}
