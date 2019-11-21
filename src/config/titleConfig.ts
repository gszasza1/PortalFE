import { LOCATION_CHANGE } from 'connected-react-router';
import { select, takeEvery } from 'redux-saga/effects';

import { IApllicationState } from '../store';

interface Options {
  [props: string]: string;
}
function* handleTitle() {
  const pathname: string = yield select((state: IApllicationState) => {
    return state.router.location.pathname;
  });
  const lastPathPart = pathname
    .split("/")
    .slice(-1)
    .pop();
  document.title =
    lastPathPart && titleForRoute[lastPathPart]
      ? titleForRoute[lastPathPart]
      : "Portal oldala";
}
export function* onNavigate() {
  yield takeEvery(LOCATION_CHANGE, handleTitle);
}
const titleForRoute: Options = {
  age: "Évfolyam eredmények",
  score: "Pont eredmények",
  create: "Új felvétele",
  random: "Véletlenszerű feladat",
  game: "Játékok",
  excercises: "Feladatok",
  user: "Felhasználói adatok",
  rank: "Ranglista",
  news: "Hírek",
  login: "Bejelentkezés",
  register: "Regisztráció",
  welcomepage: "Portal",
  auth: "Felhatalmazott",
  abcd: "Választós Feladat",
  input: "Megadós feladat",
  teszt: "Teszt",
  bombseeker: "Aknakereső",
  list: "Lista"
};
