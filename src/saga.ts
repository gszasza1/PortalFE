import { all, call } from "redux-saga/effects";
import { watchWelcomePage } from "./pages/public-page/slider-page/saga";
import { watchExcercises } from "./pages/excercises/saga";
import { watchRegister } from "./pages/register/saga";
import { watchLogin } from "./pages/login/saga";
import { watchCheckLogin } from "./user/saga";

export function* rootSaga() {
  yield all([
    call(watchWelcomePage),
    call(watchExcercises),
    call(watchRegister),
    call(watchLogin),
    call(watchCheckLogin)
  ]);
}
