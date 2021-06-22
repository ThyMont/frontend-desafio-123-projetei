export default function userReducer(state = false, action) {
  switch (action) {
    case 'LOGIN': {
      const { username, password } = action.payload;
      if (username === 'admin' && password === 'admin123') return true;
      return false;
    }
    case 'LOGOFF': {
      return false;
    }
    default:
      return false;
  }
}
