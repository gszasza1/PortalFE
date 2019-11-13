import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { GeneralProps } from '../../../../functions/interfaces';
import { IApllicationState } from '../../../../store';
import { InputExcerciseForm } from '../form/connect';
import { SubmitFormProps } from '../interface';
import { CreateInputExcerciseFormData } from './actions/create.post';

const mapStateToProps = (state: IApllicationState): GeneralProps => ({
  error: state.app.pages.excercises.inputAnswer.create.error,
  isLoaded: state.app.pages.excercises.inputAnswer.create.isLoaded,
  isRequesting: state.app.pages.excercises.inputAnswer.create.isRequesting
});
const mapDispatchToProps = (dispatch: Dispatch): SubmitFormProps =>
  bindActionCreators(
    {
      submitForm: CreateInputExcerciseFormData,
    
    },
    dispatch
  );

export const CreateInputExcerciseForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputExcerciseForm);
