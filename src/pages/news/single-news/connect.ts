import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { GeneralProps } from '../../../functions/interfaces';
import { IApllicationState } from '../../../store';
import { SingleNewsGetData, SingleNewsGetParams } from './actions/single-news.get';
import { SingleNewsUnconnected } from './component';

const mapStateToProps = (state: IApllicationState): MappedProps => {
  return {
    isRequesting: state.app.pages.news.singleNews.isRequesting,
    error: state.app.pages.news.singleNews.error,
    isLoaded: state.app.pages.news.singleNews.isLoaded,
    data: state.app.pages.news.singleNews.data
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispachedProps =>
  bindActionCreators(
    {
      SingleNewsGetData: SingleNewsGetData
    },
    dispatch
  );

export const SingleNews = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleNewsUnconnected);

export interface DispachedProps {
  SingleNewsGetData: (params: SingleNewsGetParams) => void;
}
export interface MappedProps extends GeneralProps {
  data?: SingleNewsGetData;
}

export type SingleNewsProps = MappedProps & DispachedProps;

export default SingleNews;
