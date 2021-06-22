export function login({ username, password }) {
  return {
    type: 'LOGIN',
    payload: { username, password },
  };
}

export function logoff() {
  return {
    type: 'LOGIN',
    payload: {},
  };
}
