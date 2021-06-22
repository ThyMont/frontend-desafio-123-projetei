export default function userReducer(state = false, action) {
  switch (action) {
    case 'LOGIN': {
      const { username, password } = action.payload;
      const localUser = sessionStorage.getItem('app-token');
      if (localUser) return true;
      if (username === 'admin' && password === 'admin123') {
        sessionStorage.setItem('app-token', { username, password });
        return true;
      }
      return false;
    }
    case 'LOGOFF': {
      sessionStorage.clear();
      return false;
    }
    default:
      return state;
  }
}
