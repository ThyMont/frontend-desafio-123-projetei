export function doLogin({ username, password }) {
  return {
    type: 'LOGIN',
    payload: { username, password },
  };
}

export function doLogoff() {
  return {
    type: 'LOGOFF',
    payload: null,
  };
}
