import {createSelector} from 'reselect';

const sidebarState = state => state.sidebar;

const isOpened = createSelector(
  [sidebarState],
  ({visible}) => visible,
);

export default {
  isOpened,
};
