import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  login,
  logout,
  startLoginEmailPassword,
  startLogout
} from '../../actions/auth';
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {};

let store = mockStore(initialState);

describe('auth actions tests', () => {
  const user = {
    uid: 'testUid',
    displayName: 'test user'
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('should login and logout with respective actions', () => {
    const loginResponse = login(user.uid, user.displayName);
    const logoutResponse = logout();

    expect(loginResponse).toEqual({ type: types.login, payload: user });
    expect(logoutResponse).toEqual({ type: types.logout });
  });

  test('should make logout with startLogout', async () => {
    await store.dispatch(startLogout());
    const actions = store.getActions();

    expect(actions[0]).toEqual({ type: types.logout });
    expect(actions[1]).toEqual({ type: types.notesLogoutCleaning });
  });

  test('should make login with startLoginWithEmailAndPassword', async () => {
    await store.dispatch(startLoginEmailPassword('test@email.com', '123456'));
    const actions = store.getActions();

    expect(actions[1]).toEqual({
      type: types.login,
      payload: {
        uid: 'Ee8XAJGs6Ses4QFOUC2UeB84LAl1',
        displayName: null
      }
    });
  });
});
