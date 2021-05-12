import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { RegisterScreen } from '../../../components/auth/RegisterScreen';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { types } from '../../../types/types';

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

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <RegisterScreen />
    </MemoryRouter>
  </Provider>
);

describe('RegisterScreen Tests', () => {
  test('should display properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should dispatch respective action', () => {
    const emailField = wrapper.find('input[name="email"]');
    emailField.simulate('change', {
      target: {
        value: '',
        name: 'email'
      }
    });

    wrapper.find('form').simulate('submit', { preventDefault() {} });
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.uiSetError,
      payload: 'Name is required'
    });
  });

  test('should show error message', () => {
    const initialState = {
      auth: {},
      ui: {
        loading: false,
        msgError: 'Test Error'
      }
    };

    const store = mockStore(initialState);

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <RegisterScreen />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find('.auth__alert-error').exists()).toBe(true);
    expect(wrapper.find('.auth__alert-error').text()).toBe(
      initialState.ui.msgError
    );
  });
});
