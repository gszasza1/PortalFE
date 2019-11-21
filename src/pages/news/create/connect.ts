import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IApllicationState } from '../../../store';
import { NewsForm } from '../form/connect';
import { DispatchedProps, MappedProps } from '../interface';
import { CreateNewsFormData } from './actions/create.post';

const mapDispatchToProps = (dispatch: Dispatch): DispatchedProps =>
  bindActionCreators(
    {
      submitForm: CreateNewsFormData,
      getForm: () => {}
    },
    dispatch
  );

const mapStateToProps = (state: IApllicationState): MappedProps => ({
  isLoaded: state.app.pages.news.create.isLoaded,
  isRequesting: state.app.pages.news.create.isRequesting,
  error: state.app.pages.news.create.error,
  isEdit: false
});

export const CreateNewsForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsForm);
export default CreateNewsForm;
