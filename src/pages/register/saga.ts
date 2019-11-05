import { put, takeEvery, all, call } from "redux-saga/effects";
import {
  postRegisterDataSuccess,
  postRegisterDataError,
  RegisterPostActionTypes,
  IPostRegisterRequest
} from "./actions/register.post";
import { AccountClient, RegisterData } from "../../Client";
import { BaseUrl } from "../../config/api";

function* handlePostRequest(action: IPostRegisterRequest) {
  try {
    const client = new AccountClient(BaseUrl);
    client.createAccountAsnyc(
      new RegisterData({
        age: action.params.age,
        color: action.params.color,
        email: action.params.email,
        password: action.params.password,
        userName: action.params.userName
      })
    );
    yield put(postRegisterDataSuccess({}));
  } catch (err) {
    yield put(postRegisterDataError(err));
  }
}

export function* postRegister() {
  yield takeEvery(RegisterPostActionTypes.POST_REQUEST, handlePostRequest);
}

export function* watchRegister() {
  yield all([call(postRegister)]);
}
