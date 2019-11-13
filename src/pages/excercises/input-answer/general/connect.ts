import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { GeneralProps } from '../../../../functions/interfaces';
import { IApllicationState } from '../../../../store';
import { DeleteAllInputExcerciseData, DeleteAllInputExcerciseParams } from './actions/getAll.delete';
import { GetAllInputExcerciseData, GetAllInputExcerciseParams } from './actions/getAll.get';
import { GeneralInputExcerciseUnconnected } from './component';

const mapStateToProps = (state: IApllicationState): MappedProps => ({
  error: state.app.pages.excercises.inputAnswer.list.error,
  isLoaded: state.app.pages.excercises.inputAnswer.list.isLoaded,
  isRequesting: state.app.pages.excercises.inputAnswer.list.isRequesting,
  data: state.app.pages.excercises.inputAnswer.list.data
    ? state.app.pages.excercises.inputAnswer.list.data.data
    : undefined
});
const mapDispatchToProps = (dispatch: Dispatch): DispachedProps =>
  bindActionCreators(
    {
      getData: GetAllInputExcerciseData,
      deleteData: DeleteAllInputExcerciseData
    },
    dispatch
  );

export const GeneralInputExcercise = connect(
  mapStateToProps,
  mapDispatchToProps
)(GeneralInputExcerciseUnconnected);

export interface DispachedProps {
  getData: (params: GetAllInputExcerciseParams) => void;
  deleteData: (prams: DeleteAllInputExcerciseParams) => void;
}
interface MappedProps extends GeneralProps, GetAllInputExcerciseData {}
export interface GetAllInputExcerciseProps
  extends DispachedProps,
    MappedProps {}
