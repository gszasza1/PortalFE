import { initialTheme, themeState } from ".";
import { ToogleAction, ToogleActions } from "./actions/toogleTheme.action";

export const themeReducer = (
  state = initialTheme,
  action: ToogleAction
): themeState => {
  switch (action.type) {
    case ToogleActions.THEME: {
      state = {
        ...state,
        theme: state.theme === 0 ? themeSetter(1) : themeSetter(0)
      };
      return state;
    }

    default:
      //  const _check: never = action;
      return state;
  }
};

const themeSetter = (theme: number): number => {
  document.documentElement.setAttribute("data-theme", theme.toString());
  localStorage.setItem("theme", theme.toString());
  return theme;
};
