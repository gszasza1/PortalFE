import { call, put, select, takeEvery } from 'redux-saga/effects';

import { InputExcerciseClient, SendInputExcercise } from '../../../../Client';
import { BaseUrl } from '../../../../config/api';
import { IApllicationState } from '../../../../store';
import {
  GetEditInputExcerciseFormActionTypes,
  GetEditInputExcerciseFormDataError,
  GetEditInputExcerciseFormDataSuccess,
  IGetEditInputExcerciseFormRequest,
} from './actions/edit.get';
import {
  EditInputExcerciseFormActionTypes,
  EditInputExcerciseFormDataError,
  EditInputExcerciseFormDataSuccess,
  IEditInputExcerciseFormRequest,
} from './actions/edit.put';

function* handleRequest(action: IEditInputExcerciseFormRequest) {
  try {
    const id: number | undefined = yield select((state: IApllicationState) => {
      return state.app.pages.excercises.inputAnswer.edit.params
        ? state.app.pages.excercises.inputAnswer.edit.params.id
        : undefined;
    });

    if (id) {
      const result = yield call(apiPut, action, id);
      yield put(EditInputExcerciseFormDataSuccess({ data: result }));
    }
  } catch (err) {
    console.error(err);
    yield put(EditInputExcerciseFormDataError(err));
  }
}

export function* watchEditInputExcerciseForm() {
  yield takeEvery(EditInputExcerciseFormActionTypes.REQUEST, handleRequest);
}

const apiPut = (action: IEditInputExcerciseFormRequest, id: number) => {
  const client = new InputExcerciseClient(BaseUrl);
  return client
    .putInputExcercise(new SendInputExcercise(action.params), id)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

function* handleGetRequest(action: IGetEditInputExcerciseFormRequest) {
  try {
    console.log(action.params);
    const result = yield call(apiGet, action);
    yield put(GetEditInputExcerciseFormDataSuccess(result));
  } catch (err) {
    console.error(err);
    yield put(GetEditInputExcerciseFormDataError(err));
  }
}

export function* watchGetEditInputExcerciseForm() {
  yield takeEvery(
    GetEditInputExcerciseFormActionTypes.REQUEST,
    handleGetRequest
  );
}

const apiGet = (action: IGetEditInputExcerciseFormRequest) => {
  const client = new InputExcerciseClient(BaseUrl);
  return client
    .getInputExcerciseById(action.params.id)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};
