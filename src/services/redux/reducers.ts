import {combineReducers} from 'redux';
import sidebarReducer from '../../features/common/ui/sidebar';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});

export default rootReducer;
