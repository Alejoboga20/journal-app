import React from 'react';
import { AppRouter } from './routers/AppRouter';
import { Provider } from 'react-redux';
import './styles/styles.scss';
import { store } from './store/store';

export const JournalApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
