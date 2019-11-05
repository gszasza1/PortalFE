export interface networkState {
  numberOfFailedRequest: number;
  isRequesting: boolean;
  isLoaded: boolean;
  error?: string;
}

export interface GenericState<params, data> extends networkState {
  data: data | undefined;
  params: params | undefined;
}
export interface GenericStateExtended<params, data, postPrams, PostData>
  extends networkState {
  data: data | undefined;
  params: params | undefined;
  postParams: postPrams | undefined;
  postData: PostData | undefined;
  postError: string | undefined;
  postSentNumber: number;
}

export const genericInitialState = () => {
  return {
    numberOfFailedRequest: 0,
    isRequesting: false,
    isLoaded: false,
    error: ""
  };
};

export interface GenericAction {
  data?: any;
  params?: any;
  error?: string;
}

export const genericRequestState = <Params, Data>(fgv: {
  state: GenericState<Params, Data>;
  action: GenericAction;
}) => {
  return {
    ...fgv.state,
    isRequesting: true,
    isLoaded: false,
    params: fgv.action.params ? fgv.action.params : fgv.state.params
  };
};

export const genericSuccessState = <Params, Data>(fgv: {
  state: GenericState<Params, Data>;
  action: GenericAction;
}) => {
  return {
    ...fgv.state,
    isRequesting: false,
    isLoaded: true,
    numberOfFailedRequest: 0,
    data: fgv.action.data ? fgv.action.data : fgv.state.data,
    params: fgv.action.params ? fgv.action.params : fgv.state.params
  };
};

export const genericErrorState = <Params, Data>(fgv: {
  state: GenericState<Params, Data>;
  action: GenericAction;
}) => {
  return {
    ...fgv.state,
    isRequesting: true,
    isLoaded: false,
    numberOfFailedRequest: fgv.state.numberOfFailedRequest + 1,
    error: fgv.action.error ? fgv.action.error : fgv.state.error
  };
};
