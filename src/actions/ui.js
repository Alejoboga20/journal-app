import { types } from '../types/types';

export const setUIError = (error) => ({
  type: types.uiSetError,
  payload: error
});

export const removeUIError = () => ({
  type: types.uiRemoveError
});

export const startLoading = () => ({
  type: types.uiStartLoading
});

export const finishLoading = () => ({
  type: types.uiFinishLoading
});
