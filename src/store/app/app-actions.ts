import { SET_APP_LOADING } from './app-types';

export const setAppLoading = (loading: boolean) => {
  ({ type: SET_APP_LOADING, payload: loading } as const);
};
