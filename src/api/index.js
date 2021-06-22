import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://backend-desafio-123.herokuapp.com/',
});

const auth = ({ username, password }) => {
  if (username === 'admin' && password === 'admin123') {
    return { username, password: '********' };
  }
  return;
};

const getAllPessoasFisicas = async () => {
  const data = await axios.get('/pf');
  const pessoasFisicas = data.data;
  return [...pessoasFisicas];
};

export { auth, getAllPessoasFisicas };
