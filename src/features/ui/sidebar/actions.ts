import types from './types';

const open = () => ({
  type: types.OPEN,
});

const close = () => ({
  type: types.CLOSE,
});

export default {
  open,
  close,
};
