import { AccountClient, IMinimizedLoginData } from "../Client";
import { BaseUrl } from "../config/api";

import {
  getCheckloginDataSuccess,
  CheckloginActionTypes,
  getCheckloginDataError,
  ICheckloginRequest
} from "./actions/checkLogin.get";
import { push } from "connected-react-router";
import { call, put, takeEvery, all } from "redux-saga/effects";

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

export function* checkLogin() {
  yield takeEvery(CheckloginActionTypes.REQUEST, handleGetRequest);
}

export function* watchCheckLogin() {
  yield all([call(checkLogin)]);
}
