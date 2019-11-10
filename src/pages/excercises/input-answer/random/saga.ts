import { put, takeEvery, all, call } from "redux-saga/effects";
import {
  InputAnswerActionTypes,
  IInputAnswerRequest,
  InputAnswerData,
  getInputAnswerDataSuccess,
  getInputAnswerDataError
} from "./actions/input-answer.get";
import {
  InputAnswerPostActionTypes,
  postInputAnswerDataSuccess,
  postInputAnswerDataError,
  InputAnswerPostData,
  IPostInputAnswerRequest
} from "./actions/input-answer.post";

function* handleRequest(action: IInputAnswerRequest) {
  try {
    const data: InputAnswerData = {
      data: {
        text: "Mennyi egymegegy?",
        id: "123123"
      }
    };
    yield put(getInputAnswerDataSuccess(data));
  } catch (err) {
    yield put(getInputAnswerDataError(err));
  }
}

export function* getInputAnswer() {
  yield takeEvery(InputAnswerActionTypes.REQUEST, handleRequest);
}

function* handlePostRequest(action: IPostInputAnswerRequest) {
  try {
    const data: InputAnswerPostData = {
      answerCorrect: "1"
    };
    yield put(postInputAnswerDataSuccess(data));
  } catch (err) {
    yield put(postInputAnswerDataError(err));
  }
}

export function* postInputAnswer() {
  yield takeEvery(InputAnswerPostActionTypes.POST_REQUEST, handlePostRequest);
}

export function* watchInputAnswer() {
  yield all([call(getInputAnswer), call(postInputAnswer)]);
}
