import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IApllicationState } from '../../../store';
import { NewsForm } from '../form/connect';
import { DispatchedProps, MappedProps } from '../interface';
import { getGetEditNewsFormData } from './actions/edit.get';
import { EditNewsFormData } from './actions/edit.put';

const mapDispatchToProps = (dispatch: Dispatch): DispatchedProps =>
  bindActionCreators(
    {
      submitForm: EditNewsFormData,
      getForm: getGetEditNewsFormData
    },
    dispatch
  );

const mapStateToProps = (state: IApllicationState): MappedProps => ({
  isLoaded: state.app.pages.news.edit.isLoaded,
  isRequesting: state.app.pages.news.edit.isRequesting,
  error: state.app.pages.news.edit.error,
  isEdit: true
});

export const EditNewsFormConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsForm);
