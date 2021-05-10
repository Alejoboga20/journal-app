import {
  finishLoading,
  removeUIError,
  setUIError,
  startLoading
} from '../../actions/ui';
import { types } from '../../types/types';

describe('ui actions tests', () => {
  const errorMessage = 'Test error';

  test('all actions should work', () => {
    const action = setUIError(errorMessage);
    expect(action).toEqual({ type: types.uiSetError, payload: errorMessage });

    const removeUIErrorAction = removeUIError();
    const startLoadingAction = startLoading();
    const finishLoadingAction = finishLoading();

    expect(removeUIErrorAction).toEqual({ type: types.uiRemoveError });
    expect(startLoadingAction).toEqual({ type: types.uiStartLoading });
    expect(finishLoadingAction).toEqual({ type: types.uiFinishLoading });
  });
});
