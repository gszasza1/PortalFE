import { IPostNews } from '../../../../Client';

export interface INewsFormActionTypes {
  MODIFY: "News Form mofify";
  INIT: "News Form init";
}

export const NewsFormActionTypes: INewsFormActionTypes = {
  MODIFY: "News Form mofify",
  INIT: "News Form init"
};
export interface NewsFormParams extends IPostNews {}

//ACTIONHOZ
export interface INewsFormModify {
  type: INewsFormActionTypes["MODIFY"];
  params: NewsFormParams;
}
export interface INewsFormInit {
  type: INewsFormActionTypes["INIT"];
}

//REDUCERHEZ
export type INewsForm = INewsFormModify | INewsFormInit;

//ACTIONCREATORHOZ
export const modifyNewsForm = (params: NewsFormParams): INewsFormModify => ({
  type: NewsFormActionTypes.MODIFY,
  params
});

export const initNewsForm = (): INewsFormInit => ({
  type: NewsFormActionTypes.INIT
});
