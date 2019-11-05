import { BASE_PATHS, AUTH_PATH } from "../router/paths";

export const MENU: Menuitem[] = [
  {
    name: "Feladatok",
    path: BASE_PATHS.AUTH + AUTH_PATH.EXCERCISES
  },
  {
    name: "Játékok",
    path: BASE_PATHS.AUTH + AUTH_PATH.GAME
  }
];

interface Menuitem {
  path: string;
  name: string;
}
