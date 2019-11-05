export interface IToogleAction {
  THEME: "Toogle the theme";
  INITIAL: "Initial theme";
}

export const ToogleActions: IToogleAction = {
  THEME: "Toogle the theme",
  INITIAL: "Initial theme"
};

//ACtionshoz
export interface ToogleAction {
  type: IToogleAction["THEME"];
}
export interface InitialThemeAction {
  type: IToogleAction["INITIAL"];
}

export const toogle = (): ToogleAction => ({
  type: ToogleActions.THEME
});

export const initial = (): InitialThemeAction => ({
  type: ToogleActions.INITIAL
});
