import { GameCardProps } from "../../../../components/game-card/card";

export interface IWelcomePageActionTypes {
  REQUEST: "WelcomePage request";
  SUCCESS: "WelcomePage sucess";
  ERROR: "WelcomePage error";
}

export const WelcomePageActionTypes: IWelcomePageActionTypes = {
  REQUEST: "WelcomePage request",
  SUCCESS: "WelcomePage sucess",
  ERROR: "WelcomePage error"
};
export interface welcomePageParams {}
export interface welcomePageData {
  db: Array<{ img?: string; title: string; secondTitle: string }>;
  cards: GameCardProps[];
}

//ACTIONHOZ
export interface IWelcomePageRequest {
  type: IWelcomePageActionTypes["REQUEST"];
  params: welcomePageParams;
}
export interface IWelcomePageSuccess {
  type: IWelcomePageActionTypes["SUCCESS"];
  data: welcomePageData;
}
export interface IWelcomePageError {
  type: IWelcomePageActionTypes["ERROR"];
  error?: string;
}

//REDUCERHEZ
export type IWelcomePage =
  | IWelcomePageRequest
  | IWelcomePageSuccess
  | IWelcomePageError;

//ACTIONCREATORHOZ
export const getWelcomePageData = (
  params: welcomePageParams
): IWelcomePageRequest => ({
  type: WelcomePageActionTypes.REQUEST,
  params
});

export const getWelcomePageDataError = (error?: string): IWelcomePageError => ({
  type: WelcomePageActionTypes.ERROR,
  error
});
export const getWelcomePageDataSuccess = (
  data: welcomePageData
): IWelcomePageSuccess => ({
  type: WelcomePageActionTypes.SUCCESS,
  data
});
