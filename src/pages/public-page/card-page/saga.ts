import { call, put, takeEvery } from 'redux-saga/effects';

import { NewsClient } from '../../../Client';
import { BaseUrl } from '../../../config/api';
import {
  getWelcomePageDataError,
  getWelcomePageDataSuccess,
  IWelcomePageRequest,
  WelcomePageActionTypes,
} from './actions/welcome.get';

function* handleRequest(action: IWelcomePageRequest) {
  try {
    const result = yield call(api, action);

    yield put(getWelcomePageDataSuccess({ data: result }));
  } catch (err) {
    yield put(getWelcomePageDataError(err));
  }
}

export function* watchWelcomePage() {
  yield takeEvery(WelcomePageActionTypes.REQUEST, handleRequest);
}
const api = (action: IWelcomePageRequest) => {
  const client = new NewsClient(BaseUrl);
  return client
    .get(10)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};
