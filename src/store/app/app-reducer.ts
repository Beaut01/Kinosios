import { SET_APP_LOADING } from './app-types';

interface IState {
  loading: boolean;
}
const INITIAL_STATE: IState = {
  loading: false,
};

export default (state = INITIAL_STATE, action: any): IState => {
  switch (action.payload) {
    case SET_APP_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
