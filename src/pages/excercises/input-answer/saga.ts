import { all, call } from 'redux-saga/effects';

import { watchCreateInputExcerciseForm } from './create/saga';
import { watchEditInputExcerciseForm, watchGetEditInputExcerciseForm } from './edit/saga';
import { watchDeleteAllInputExcercise, watchGetAllInputExcercise } from './general/saga';
import { watchInputAnswer } from './random/saga';

export function* watcInputExcercise() {
  yield all([
    call(watchCreateInputExcerciseForm),
    call(watchInputAnswer),
    call(watchEditInputExcerciseForm),
    call(watchGetEditInputExcerciseForm),
    call(watchGetAllInputExcercise),
    call(watchDeleteAllInputExcercise)
  ]);
}
