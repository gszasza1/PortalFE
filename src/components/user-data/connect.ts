import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { GeneralProps } from '../../functions/interfaces';
import { IApllicationState } from '../../store';
import { getUserDataData, UserDataData, UserDataParams } from './actions/user-data.get';
import { UserDataUnconnected } from './component';

const mapStateToProps = (state: IApllicationState): MappedProps => {
  return {
    data: state.app.pages.userProfileData.data,
    error: state.app.pages.userProfileData.error,
    isLoaded: state.app.pages.userProfileData.isLoaded,
    isRequesting: state.app.pages.userProfileData.isRequesting
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispachedProps =>
  bindActionCreators(
    {
      getUserData: getUserDataData
    },
    dispatch
  );

export const UserData = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDataUnconnected);

export interface DispachedProps {
  getUserData: (params: UserDataParams) => void;
}
export interface MappedProps extends GeneralProps {
  data?: UserDataData;
}

export type UserDataProps = MappedProps & DispachedProps;
