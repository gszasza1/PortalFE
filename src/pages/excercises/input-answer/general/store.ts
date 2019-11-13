import { genericInitialState, GenericState } from '../../../../template/action';
import { GetAllInputExcerciseData, GetAllInputExcerciseParams } from './actions/getAll.get';

export interface GetAllInputExcerciseState
  extends GenericState<GetAllInputExcerciseParams, GetAllInputExcerciseData> {}

export const initialState: GetAllInputExcerciseState = {
  ...genericInitialState(),
  data: undefined,
  params: undefined
};
