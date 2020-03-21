import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from '../services/redux';
import Router from '../navigation';
import 'normalize.css';
import '../services/localization';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      {rehydrated => <Router rehydrated={rehydrated} />}
    </PersistGate>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
