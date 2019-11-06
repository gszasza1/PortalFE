import { call, put, takeEvery } from 'redux-saga/effects';

import { AccountClient } from '../../Client';
import { BaseUrl } from '../../config/api';
import {
    getUserDataDataError,
    getUserDataDataSuccess,
    IUserDataRequest,
    UserDataActionTypes,
} from './actions/user-data.get';

function* handleRequest(action: IUserDataRequest) {
  try {
    const result = yield call(api, action);
    yield put(getUserDataDataSuccess({ ...result }));
  } catch (err) {
    yield put(getUserDataDataError(err));
  }
}

export function* watchUserData() {
  yield takeEvery(UserDataActionTypes.REQUEST, handleRequest);
}
const api = (action: IUserDataRequest) => {
  const client = new AccountClient(BaseUrl);
  return client
    .getSelfProfile()
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};
