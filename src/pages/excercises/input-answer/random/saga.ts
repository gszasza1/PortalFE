import { all, call, put, takeEvery } from 'redux-saga/effects';

import { InputExcerciseClient } from '../../../../Client';
import { BaseUrl } from '../../../../config/api';
import {
  getInputAnswerDataError,
  getInputAnswerDataSuccess,
  IInputAnswerRequest,
  InputAnswerActionTypes,
} from './actions/input-answer.get';
import {
  InputAnswerPostActionTypes,
  IPostInputAnswerRequest,
  postInputAnswerDataError,
  postInputAnswerDataSuccess,
} from './actions/input-answer.post';

function* handleRequest(action: IInputAnswerRequest) {
  try {
    const result = yield call(apiGet, action);
    yield put(getInputAnswerDataSuccess({ data: result }));
  } catch (err) {
    yield put(getInputAnswerDataError(err));
  }
}

export function* getInputAnswer() {
  yield takeEvery(InputAnswerActionTypes.REQUEST, handleRequest);
}

function* handlePostRequest(action: IPostInputAnswerRequest) {
  try {
    const data = yield call(apiPost, action);
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

const apiGet = (action: IInputAnswerRequest) => {
  const client = new InputExcerciseClient(BaseUrl);
  return client
    .getRandomInputExcercise()
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

const apiPost = (action: IPostInputAnswerRequest) => {
  const client = new InputExcerciseClient(BaseUrl);
  if (action.params.answer)
    return client
      .postAnswer(action.params.id, action.params.answer)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
};
