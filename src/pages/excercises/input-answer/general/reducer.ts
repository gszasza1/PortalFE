import { genericErrorState, genericRequestState, genericSuccessState } from '../../../../template/action';
import { DeleteAllInputExcerciseActionTypes, IDeleteAllInputExcercise } from './actions/getAll.delete';
import { GetAllInputExcerciseActionTypes, IGetAllInputExcercise } from './actions/getAll.get';
import { GetAllInputExcerciseState, initialState } from './store';

type Action = IGetAllInputExcercise | IDeleteAllInputExcercise;
export const GetAllInputExcerciseReducer = (
  state = initialState,
  action: Action
): GetAllInputExcerciseState => {
  switch (action.type) {
    case GetAllInputExcerciseActionTypes.REQUEST: {
      state = {
        ...state,
        ...genericRequestState({ action, state })
      };
      return state;
    }
    case GetAllInputExcerciseActionTypes.SUCCESS: {
      state = {
        ...state,
        ...genericSuccessState({ action, state })
      };
      return state;
    }

    case GetAllInputExcerciseActionTypes.ERROR: {
      state = {
        ...state,
        ...genericErrorState({ action, state })
      };
      return state;
    }
    case DeleteAllInputExcerciseActionTypes.SUCCESS: {
      state = {
        ...state,
        data: {
          ...state.data,
          data:
            state.data && state.data.data
              ? state.data.data.filter(item => item.id !== action.data.id)
              : []
        }
      };
      return state;
    }

    default:
      return state;
  }
};
