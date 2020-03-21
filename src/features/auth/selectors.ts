import {createSelector} from 'reselect';

const authState = state => state.auth;

const isLoggedIn = createSelector(
  [authState],
  ({token}) => token !== '',
);

export default {
  isLoggedIn,
};
