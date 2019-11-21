import { call, put, takeEvery } from 'redux-saga/effects';

import { NewsClient, PostNews } from '../../../Client';
import { BaseUrl } from '../../../config/api';
import {
  GetEditNewsFormActionTypes,
  GetEditNewsFormData,
  getGetEditNewsFormDataError,
  getGetEditNewsFormDataSuccess,
  IGetEditNewsFormRequest,
} from './actions/edit.get';
import {
  EditNewsFormActionTypes,
  EditNewsFormDataError,
  EditNewsFormDataSuccess,
  IEditNewsFormRequest,
} from './actions/edit.put';

function* handleRequestUpdate(action: IEditNewsFormRequest) {
  try {
    const result = yield call(apiUpdate, action);

    yield put(EditNewsFormDataSuccess({ data: result }));
  } catch (err) {
    console.error(err);
    yield put(EditNewsFormDataError(err));
  }
}

export function* watchEditNewsFormUpdate() {
  yield takeEvery(EditNewsFormActionTypes.REQUEST, handleRequestUpdate);
}

const apiUpdate = (action: IEditNewsFormRequest) => {
  const client = new NewsClient(BaseUrl);
  return client
    .update(new PostNews(action.params))
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

function* handleRequestGet(action: IGetEditNewsFormRequest) {
  try {
    const result: GetEditNewsFormData = yield call(apiGet, action);

    yield put(getGetEditNewsFormDataSuccess(result));
  } catch (err) {
    console.error(err);
    yield put(getGetEditNewsFormDataError(err));
  }
}

export function* watchEditNewsFormGet() {
  yield takeEvery(GetEditNewsFormActionTypes.REQUEST, handleRequestGet);
}

const apiGet = (action: IGetEditNewsFormRequest) => {
  const client = new NewsClient(BaseUrl);
  return client
    .getById(action.params.id)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};
