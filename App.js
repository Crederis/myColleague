import React from 'react';
import { Provider } from 'react-redux';
import App from './App/navigation';
import store from './App/store';

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
