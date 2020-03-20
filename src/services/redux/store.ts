import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

import rootReducer from './reducers';

const middleware = applyMiddleware(thunk, logger);
export default createStore(rootReducer, middleware);
