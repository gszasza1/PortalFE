import { combineReducers } from "redux";
import { welcomePageState } from "./public-page/slider-page/store";
import { welcomePageReducer } from "./public-page/slider-page/reducer";
import { ExcercisesState, ExcercisesReducer } from "./excercises/store";
import { RegisterState } from "./register/store";
import { RegisterReducer } from "./register/reducer";
import { LoginState } from "./login/store";
import { LoginReducer } from "./login/reducer";

export interface PagesState {
  welcomePage: welcomePageState;
  excercises: ExcercisesState;
  register: RegisterState;
  login: LoginState;
}

export const PagesReducer = combineReducers<PagesState>({
  welcomePage: welcomePageReducer,
  excercises: ExcercisesReducer,
  register: RegisterReducer,
  login:LoginReducer
});
