import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/auth/LoginScreen';
import {
  startGoogleLogin,
  startLoginEmailPassword
} from '../../../actions/auth';

jest.mock('../../../actions/auth', () => ({
  startGoogleLogin: jest.fn(),
  startLoginEmailPassword: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null
  }
};

let store = mockStore(initialState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <LoginScreen />
    </MemoryRouter>
  </Provider>
);

describe('LoginScreen Tests', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    jest.clearAllMocks();
  });

  test('should display properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call startLoginWithGoogle', async () => {
    wrapper.find('.google-btn').prop('onClick')();
    expect(startGoogleLogin).toHaveBeenCalled();
  });

  test('should call startLoginWithEmailAndPassword', () => {
    wrapper.find('form').prop('onSubmit')({ preventDefault() {} });
    expect(startLoginEmailPassword).toHaveBeenCalledWith(
      'test@email.com',
      '123456'
    );
  });
});
