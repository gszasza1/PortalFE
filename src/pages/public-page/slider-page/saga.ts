import { put, takeEvery } from "redux-saga/effects";

import {
  WelcomePageActionTypes,
  IWelcomePageRequest,
  getWelcomePageDataSuccess,
  getWelcomePageDataError,
  welcomePageData
} from "./actions/welcome.get";

function* handleRequest(action: IWelcomePageRequest) {
  try {
    const data: welcomePageData = {
      db: [
        {
          secondTitle: "asdasdasd",
          title: "Nagy asd"
        },
        {
          secondTitle: "fdgdfgdfg",
          title: "12123"
        },
        {
          secondTitle: "fghfghfghfghfghfgh",
          title: "234234"
        }
      ],
      cards: [
        {
          cardText: "asdasd",
          id: "1",
          img: "src/assets/tempImage.png",
          subtitle: "subtitle",
          title: "title"
        },
        {
          cardText: "asdasd",
          id: "2",
          img: "src/assets/tempImage.png",
          subtitle: "subtitle",
          title: "title"
        },
        {
          cardText: "asdasd",
          id: "3",
          img: "src/assets/tempImage.png",
          subtitle: "subtitle",
          title: "title"
        },
        {
          cardText: "asdasd",
          id: "4",
          img: "src/assets/tempImage.png",
          subtitle: "subtitle",
          title: "title"
        },
        {
          cardText: "asdasd",
          id: "5",
          img: "src/assets/tempImage.png",
          subtitle: "subtitle",
          title: "title"
        }
      ]
    };
    yield put(getWelcomePageDataSuccess(data));
  } catch (err) {
    yield put(getWelcomePageDataError(err));
  }
}

export function* watchWelcomePage() {
  yield takeEvery(WelcomePageActionTypes.REQUEST, handleRequest);
}
