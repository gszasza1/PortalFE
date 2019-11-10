import { call, put, takeEvery } from 'redux-saga/effects';

import { InputExcerciseClient, SendInputExcercise } from '../../../../Client';
import { BaseUrl } from '../../../../config/api';
import {
  CreateInputExcerciseFormActionTypes,
  CreateInputExcerciseFormDataError,
  CreateInputExcerciseFormDataSuccess,
  ICreateInputExcerciseFormRequest,
} from './actions/create.post';

function* handleRequest(action: ICreateInputExcerciseFormRequest) {
  try {
    const result = yield call(api, action);

    yield put(CreateInputExcerciseFormDataSuccess({ data: result }));
  } catch (err) {
    console.error(err);
    yield put(CreateInputExcerciseFormDataError(err));
  }
}

export function* watchCreateInputExcerciseForm() {
  yield takeEvery(CreateInputExcerciseFormActionTypes.REQUEST, handleRequest);
}

const api = (action: ICreateInputExcerciseFormRequest) => {
  const client = new InputExcerciseClient(BaseUrl);
  return client
    .postInputExcercise(new SendInputExcercise(action.params))
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};
