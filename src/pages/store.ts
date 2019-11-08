import { combineReducers } from 'redux';

import { UserDataReducer } from '../components/user-data/reducer';
import { UserDataState } from '../components/user-data/store';
import { ExcercisesReducer, ExcercisesState } from './excercises/store';
import { LoginReducer } from './login/reducer';
import { LoginState } from './login/store';
import { NewsReducer, NewsState } from './news/store';
import { welcomePageReducer } from './public-page/card-page/reducer';
import { welcomePageState } from './public-page/card-page/store';
import { RankReducer, RankState } from './rank';
import { RegisterReducer } from './register/reducer';
import { RegisterState } from './register/store';

export interface PagesState {
  welcomePage: welcomePageState;
  excercises: ExcercisesState;
  register: RegisterState;
  rank: RankState;
  login: LoginState;
  userProfileData: UserDataState;
  news: NewsState;
}

export const PagesReducer = combineReducers<PagesState>({
  welcomePage: welcomePageReducer,
  excercises: ExcercisesReducer,
  register: RegisterReducer,
  login: LoginReducer,
  rank: RankReducer,
  userProfileData: UserDataReducer,
  news: NewsReducer
});
