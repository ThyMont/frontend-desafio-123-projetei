import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://backend-desafio-123.herokuapp.com/',
});

const auth = ({ username, password }) => {
  if (username === 'admin' && password === '#4dm1n123') {
    return { username, password };
  }
  return;
};

const getAllPessoasFisicas = async () => {
  const data = await axios.get('/pf');
  const pessoasFisicas = data.data;
  return [...pessoasFisicas];
};

const savePessoaFisica = async (pessoaFisica) => {
  const data = await axios.post('/pf', pessoaFisica);
  const pf = data.data;
  return pf;
};

const updatePessoaFisica = async ({ cpf, ...pessoaFisica }) => {
  const data = await axios.put(`/pf/${cpf}`, pessoaFisica);
  const pf = data.data;
  return pf;
};

const deletePessoaFisica = async (cpf) => {
  const data = await axios.delete(`/pf/${cpf}`);
  const res = data.data;
  return res;
};

export {
  auth,
  getAllPessoasFisicas,
  deletePessoaFisica,
  savePessoaFisica,
  updatePessoaFisica,
};
