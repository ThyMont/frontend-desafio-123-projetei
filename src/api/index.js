//import Axios from 'axios';

//const axios = Axios();

const auth = ({ email, password }) => {
  if (email === 'admin@admin.com' && password === 'admin123') {
    return { email };
  }
  return;
};

export { auth };
