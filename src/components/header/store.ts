export interface themeState {
  theme: THEMES;
}

export enum THEMES {
  dark,
  light
}

const getBrowserTheme = (): number => {
  const browserTheme = localStorage.getItem("theme");
  if (!browserTheme) {
    localStorage.setItem("theme", THEMES.light.toString());
  }

  return browserTheme ? +browserTheme : THEMES.light;
};

const setBrowserTheme = (): number => {
  const thtmeNumber = getBrowserTheme();
  document.documentElement.setAttribute("data-theme", thtmeNumber.toString());
  return thtmeNumber;
};

export const initialTheme: themeState = {
  theme: setBrowserTheme()
};
