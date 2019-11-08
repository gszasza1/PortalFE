import { IPostNews } from '../../../Client';

export interface NewsFormState extends IPostNews {}

export const initialState: NewsFormState = {
  description: "",
  link: "",
  title: ""
};
