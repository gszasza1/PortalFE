import { call, put, takeEvery } from 'redux-saga/effects';

import { NewsClient, PostNews } from '../../../Client';
import { BaseUrl } from '../../../config/api';
import {
  CreateNewsFormActionTypes,
  CreateNewsFormDataError,
  CreateNewsFormDataSuccess,
  ICreateNewsFormRequest,
} from './actions/create.post';

function* handleRequest(action: ICreateNewsFormRequest) {
  try {
    const result = yield call(api, action);

    yield put(CreateNewsFormDataSuccess({ data: result }));
  } catch (err) {
    console.error(err);
    yield put(CreateNewsFormDataError(err));
  }
}

export function* watchCreateNewsForm() {
  yield takeEvery(CreateNewsFormActionTypes.REQUEST, handleRequest);
}

const api = (action: ICreateNewsFormRequest) => {
  const client = new NewsClient(BaseUrl);
  return client
    .post(new PostNews(action.params))
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};
