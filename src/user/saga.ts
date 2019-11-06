import { push } from 'connected-react-router';
import { all, call, put, takeEvery } from 'redux-saga/effects';

import { AccountClient, IMinimizedLoginData } from '../Client';
import { BaseUrl } from '../config/api';
import { ResetActionTypes } from '../store';
import {
  CheckloginActionTypes,
  getCheckloginDataError,
  getCheckloginDataSuccess,
  ICheckloginRequest,
} from './actions/checkLogin.get';

const api = (): Promise<IMinimizedLoginData> | any => {
  const client = new AccountClient(BaseUrl);
  return client
    .checkAuthorization()
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error);
    });
};

function* handleGetRequest(action: ICheckloginRequest) {
  try {
    const result = yield call(api);
    yield put(getCheckloginDataSuccess(result));
    yield put(push(action.params.currentUrl));
  } catch (err) {
    yield put(getCheckloginDataError(err));
  }
}
function* handleLogout() {
  yield put(push(""));
}

export function* checkLogin() {
  yield takeEvery(CheckloginActionTypes.REQUEST, handleGetRequest);
}
export function* checklogout() {
  yield takeEvery(ResetActionTypes.type, handleLogout);
}

export function* watchCheckLogin() {
  yield all([call(checkLogin), call(checklogout)]);
}
