import { login, logout } from '../../actions/auth';
import { types } from '../../types/types';

describe('auth actions tests', () => {
  const user = {
    uid: 'testUid',
    displayName: 'test user'
  };

  test('should login and logout with respective actions', () => {
    const loginResponse = login(user.uid, user.displayName);
    const logoutResponse = logout();

    expect(loginResponse).toEqual({ type: types.login, payload: user });
    expect(logoutResponse).toEqual({ type: types.logout });
  });
});
