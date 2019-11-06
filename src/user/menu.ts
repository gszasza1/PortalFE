import { AUTH_PATH, BASE_PATHS } from '../router/paths';

export const MENU: Menuitem[] = [
  {
    name: "Feladatok",
    path: BASE_PATHS.AUTH + AUTH_PATH.EXCERCISES
  },
  {
    name: "Játékok",
    path: BASE_PATHS.AUTH + AUTH_PATH.GAME
  },

  {
    name: "Ranglista",
    path: BASE_PATHS.AUTH + AUTH_PATH.RANK
  },

  {
    name: "Hír",
    path: BASE_PATHS.AUTH + AUTH_PATH.NEWS
  }
];

interface Menuitem {
  path: string;
  name: string;
}
