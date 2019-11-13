import { call, put, takeEvery } from 'redux-saga/effects';

import { InputExcerciseClient } from '../../../../Client';
import { BaseUrl } from '../../../../config/api';
import {
  DeleteAllInputExcerciseActionTypes,
  DeleteAllInputExcerciseDataError,
  DeleteAllInputExcerciseDataSuccess,
  IDeleteAllInputExcerciseRequest,
} from './actions/getAll.delete';
import {
  GetAllInputExcerciseActionTypes,
  GetAllInputExcerciseDataError,
  GetAllInputExcerciseDataSuccess,
  IGetAllInputExcerciseRequest,
} from './actions/getAll.get';

function* handleRequest(action: IGetAllInputExcerciseRequest) {
  try {
    const result = yield call(apiGet, action);

    yield put(GetAllInputExcerciseDataSuccess({ data: result }));
  } catch (err) {
    console.error(err);
    yield put(GetAllInputExcerciseDataError(err));
  }
}

export function* watchGetAllInputExcercise() {
  yield takeEvery(GetAllInputExcerciseActionTypes.REQUEST, handleRequest);
}

const apiGet = (action: IGetAllInputExcerciseRequest) => {
  const client = new InputExcerciseClient(BaseUrl);
  return client
    .getAllMinimized()
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

function* handleDeleteRequest(action: IDeleteAllInputExcerciseRequest) {
  try {
    yield call(apiDelete, action);

    yield put(DeleteAllInputExcerciseDataSuccess({ id: action.params.id }));
  } catch (err) {
    console.error(err);
    yield put(DeleteAllInputExcerciseDataError(err));
  }
}

export function* watchDeleteAllInputExcercise() {
  yield takeEvery(
    DeleteAllInputExcerciseActionTypes.REQUEST,
    handleDeleteRequest
  );
}

const apiDelete = (action: IDeleteAllInputExcerciseRequest) => {
  const client = new InputExcerciseClient(BaseUrl);
  return client
    .deleteInputExcerciseById(action.params.id)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};
