import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { GeneralProps } from '../../../../functions/interfaces';
import { IApllicationState } from '../../../../store';
import { SubmitFormProps } from '../interface';
import { GetEditInputExcerciseFormData, GetEditInputExcerciseFormParams } from './actions/edit.get';
import { EditInputExcerciseFormData } from './actions/edit.put';
import { EditInputExcerciseFormUnconnected } from './component';

const mapStateToProps = (state: IApllicationState): GeneralProps => ({
  error: state.app.pages.excercises.inputAnswer.edit.error,
  isLoaded: state.app.pages.excercises.inputAnswer.edit.isLoaded,
  isRequesting: state.app.pages.excercises.inputAnswer.edit.isRequesting
});
const mapDispatchToProps = (
  dispatch: Dispatch
): SubmitFormProps & MappedProps =>
  bindActionCreators(
    {
      submitForm: EditInputExcerciseFormData,
      getData: GetEditInputExcerciseFormData
    },
    dispatch
  );

export const EditInputExcerciseForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditInputExcerciseFormUnconnected);
export interface MappedProps {
  getData: (props: GetEditInputExcerciseFormParams) => void;
}
