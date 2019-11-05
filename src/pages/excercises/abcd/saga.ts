import { put, takeEvery, all, call } from "redux-saga/effects";
import {
  IAbcdRequest,
  AbcdData,
  getAbcdDataSuccess,
  getAbcdDataError,
  AbcdActionTypes,
  IPostAbcdRequest,
  AbcdPostData,
  postAbcdDataSuccess,
  postAbcdDataError,
  AbcdPostActionTypes
} from ".";

function* handleRequest(action: IAbcdRequest) {
  try {
    const data: AbcdData = {
      data: {
        text: "nehéz ez az első feladat",
        id: "123123",
        answers: [{ id: "1", answer: "A" }, { answer: "B", id: "2" }]
      }
    };
    yield put(getAbcdDataSuccess(data));
  } catch (err) {
    yield put(getAbcdDataError(err));
  }
}

export function* getAbcd() {
  yield takeEvery(AbcdActionTypes.REQUEST, handleRequest);
}

function* handlePostRequest(action: IPostAbcdRequest) {
  try {
    const data: AbcdPostData = {
      answerCorrect: "1"
    };
    yield put(postAbcdDataSuccess(data));
  } catch (err) {
    yield put(postAbcdDataError(err));
  }
}

export function* postAbcd() {
  yield takeEvery(AbcdPostActionTypes.POST_REQUEST, handlePostRequest);
}

export function* watchAbcd() {
  yield all([call(getAbcd), call(postAbcd)]);
}
