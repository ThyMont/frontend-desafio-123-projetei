import { defineState } from 'redux-localstore';

const defaultState = false;

const initialState = defineState(defaultState)('user');

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case 'LOGIN': {
      const { username, password } = action.payload;
      if (username === 'admin' && password === '#4dm1n123') {
        return true;
      }
      return state;
    }
    case 'LOGOFF': {
      return false;
    }
    default:
      return state;
  }
}
