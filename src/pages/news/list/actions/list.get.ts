import { INew } from '../../../../Client';

export interface INewsListActionTypes {
  REQUEST: "NewsList request";
  SUCCESS: "NewsList sucess";
  ERROR: "NewsList error";
}

export const NewsListActionTypes: INewsListActionTypes = {
  REQUEST: "NewsList request",
  SUCCESS: "NewsList sucess",
  ERROR: "NewsList error"
};
export interface NewsListParams {}
export interface NewsListData {
  data?: INew[];
}

//ACTIONHOZ
export interface INewsListRequest {
  type: INewsListActionTypes["REQUEST"];
  params: NewsListParams;
}
export interface INewsListSuccess {
  type: INewsListActionTypes["SUCCESS"];
  data: NewsListData;
}
export interface INewsListError {
  type: INewsListActionTypes["ERROR"];
  error?: string;
}

//REDUCERHEZ
export type INewsList = INewsListRequest | INewsListSuccess | INewsListError;

//ACTIONCREATORHOZ
export const getNewsListData = (params: NewsListParams): INewsListRequest => ({
  type: NewsListActionTypes.REQUEST,
  params
});

export const getNewsListDataError = (error?: string): INewsListError => ({
  type: NewsListActionTypes.ERROR,
  error
});
export const getNewsListDataSuccess = (
  data: NewsListData
): INewsListSuccess => ({
  type: NewsListActionTypes.SUCCESS,
  data
});
