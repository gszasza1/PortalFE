import { RouterState } from 'connected-react-router';
import { AnyAction, combineReducers, Reducer } from 'redux';

import { themeReducer, themeState } from './components/header';
import { PagesReducer, PagesState } from './pages/store';
import { UserState } from './user';
import { userReducer } from './user/reducer';

export interface AppState {
  pages: PagesState;
  user: UserState;

  theme: themeState;
}

export interface IApllicationState {
  router: RouterState;
  app: AppState;
}

export interface ResetAction {
  type: "RESET_EVERYTHING";
}
export const ResetActionTypes: ResetAction = {
  type: "RESET_EVERYTHING"
};

export const resetEverything = (): ResetAction => ({
  type: "RESET_EVERYTHING"
});

export const appReducer = combineReducers<AppState>({
  pages: PagesReducer,
  user: userReducer,
  theme: themeReducer
});

export const appRootReducer: Reducer<AppState> = (
  state: AppState | undefined,
  action: AnyAction
): AppState => {
  if (action.type === "RESET_EVERYTHING") {
    localStorage.clear();
    state = undefined;
  }

  return appReducer(state, action);
};
