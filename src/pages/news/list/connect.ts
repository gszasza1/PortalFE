import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { GeneralProps } from '../../../functions/interfaces';
import { IApllicationState } from '../../../store';
import { getNewsListData, NewsListData, NewsListParams } from './actions/list.get';
import { NewsListUnconnected } from './component';

const mapStateToProps = (state: IApllicationState): MappedProps => {
  return {
    data: state.app.pages.news.newsList.data
      ? state.app.pages.news.newsList.data.data
      : undefined,
    error: state.app.pages.news.newsList.error,
    isLoaded: state.app.pages.news.newsList.isLoaded,
    isRequesting: state.app.pages.news.newsList.isRequesting
  };
};
const mapDispatchToProps = (dispatch: Dispatch): DispachedProps =>
  bindActionCreators(
    {
      getNewsListData: getNewsListData
    },
    dispatch
  );

export const NewsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsListUnconnected);

export interface DispachedProps {
  getNewsListData: (params: NewsListParams) => void;
}
interface MappedProps extends GeneralProps, NewsListData {}
export interface NewsListProps extends DispachedProps, MappedProps {}
export default NewsList;
