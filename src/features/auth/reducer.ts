import {types as exampleTypes} from './example';

const initialState = {
  token: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case exampleTypes.SIGN_IN_EXAMPLE:
      return {...state, token: action.token};
    case exampleTypes.SIGN_UP_EXAMPLE:
      return {...state, token: action.token};
    case exampleTypes.SIGN_OUT_EXAMPLE:
      return {...state, token: ''};
    default:
      return state;
  }
};
