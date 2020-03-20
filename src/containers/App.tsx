import React from 'react';
import {Provider} from 'react-redux';
import store from '../services/redux';
import Router from '../navigation';

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
