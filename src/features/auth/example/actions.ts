import types from './types';

const signInExample = () => ({
  type: types.SIGN_IN_EXAMPLE,
});

const signUpExample = () => ({
  type: types.SIGN_UP_EXAMPLE,
});

const signOutExample = () => ({
  type: types.SIGN_OUT_EXAMPLE,
});

export default {
  signInExample,
  signUpExample,
  signOutExample,
};
