import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IPostNews } from '../../../Client';
import { IApllicationState } from '../../../store';
import { initNewsForm, modifyNewsForm } from './action/formmodify.';
import { NewsFormUnconnected } from './component';

const mapStateToProps = (state: IApllicationState): MappedProps => ({
  formdata: state.app.pages.news.form
});

const mapDispatchToProps = (dispatch: Dispatch): DispachedProps =>
  bindActionCreators(
    {
      modifyNewsForm: modifyNewsForm,
      resetForm: initNewsForm
    },
    dispatch
  );

export const NewsForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFormUnconnected);

export interface DispachedProps {
  modifyNewsForm: (props: IPostNews) => void;
  resetForm: () => void;
}
export interface MappedProps {
  formdata: IPostNews;
}

export type NewsFormProps = MappedProps & DispachedProps;
