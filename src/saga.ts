import { all, call } from 'redux-saga/effects';

import { watchUserData } from './components/user-data/saga';
import { watchExcercises } from './pages/excercises/saga';
import { watchLogin } from './pages/login/saga';
import { watchWelcomePage } from './pages/public-page/card-page/saga';
import { watchRank } from './pages/rank/saga';
import { watchRegister } from './pages/register/saga';
import { watchCheckLogin } from './user/saga';

export function* rootSaga() {
  yield all([
    call(watchWelcomePage),
    call(watchExcercises),
    call(watchRegister),
    call(watchLogin),
    call(watchRank),
    call(watchCheckLogin),
    call(watchUserData)
  ]);
}
