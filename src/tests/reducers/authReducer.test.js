import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('authReducer Tests', () => {
  const initialState = {};
  const loginPayload = { uid: '123456', displayName: 'testUser' };
  const loginAction = {
    type: types.login,
    payload: { ...loginPayload }
  };

  const logoutAction = { type: types.logout };

  const unknownAction = { type: 'Hello' };

  test('should make login', () => {
    const state = authReducer(initialState, loginAction);
    expect(state).toEqual({ uid: '123456', name: 'testUser' });
  });

  test('should make logout', () => {
    const state = authReducer(initialState, logoutAction);
    expect(state).toEqual({});
  });

  test('should not make changes to state', () => {
    const state = authReducer(initialState, unknownAction);
    expect(state).toEqual(initialState);
  });
});
