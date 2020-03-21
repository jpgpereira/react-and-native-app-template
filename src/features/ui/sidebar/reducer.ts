import types from './types';

const initialState = {
  visible: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN:
      return {...state, visible: true};
    case types.CLOSE:
      return {...state, visible: false};
    default:
      return state;
  }
};
