import {combineReducers} from 'redux';
import sidebarReducer from '../../features/ui/sidebar';
import authReducer from '../../features/auth';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  auth: authReducer,
});

export default rootReducer;
