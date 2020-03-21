import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

import rootReducer from './reducers';
import persistConfig from './persistor';

const middlewares: any = [thunk];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({colors: {}});
  middlewares.push(logger);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(...middlewares);

const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);

export default store;
