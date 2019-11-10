import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IApllicationState } from '../../../../store';
import { initInputExcerciseForm, InputExcerciseFormParams, modifyInputExcerciseForm } from './action/formmodify.';
import { InputExcerciseFormUnconnected } from './component';

const mapStateToProps = (state: IApllicationState): MappedProps => ({
  formdata: state.app.pages.excercises.inputAnswer.form
});

const mapDispatchToProps = (dispatch: Dispatch): DispachedProps =>
  bindActionCreators(
    {
      modifyInputExcerciseForm: modifyInputExcerciseForm,
      resetForm: initInputExcerciseForm
    },
    dispatch
  );

export const InputExcerciseForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputExcerciseFormUnconnected);

export interface DispachedProps {
  modifyInputExcerciseForm: (props: InputExcerciseFormParams) => void;
  resetForm: () => void;
}
export interface MappedProps {
  formdata: InputExcerciseFormParams;
}

export type InputExcerciseFormProps = MappedProps & DispachedProps;
