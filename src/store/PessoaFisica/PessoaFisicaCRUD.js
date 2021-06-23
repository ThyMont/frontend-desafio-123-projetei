import {
  fetchPessoasFisicasRequest,
  fetchPessoasFisicasSuccess,
  fetchPessoasFisicasFailure,
} from '../PessoaFisica/PessoaFisica.actions';
import * as api from '../../api';
import {
  createPessoaFisicaFailure,
  createPessoaFisicaRequest,
  createPessoaFisicaSuccess,
  deletePessoaFisicaFailure,
  deletePessoaFisicaRequest,
  deletePessoaFisicaSuccess,
} from '../SelectedPessoaFisica/SelectedPessoFisica.actions';

export async function fetchPessoasFisicas(dispatch, _getState) {
  dispatch(fetchPessoasFisicasRequest());
  try {
    const response = await api.getAllPessoasFisicas();

    await dispatch(fetchPessoasFisicasSuccess(response));
  } catch (error) {
    dispatch(fetchPessoasFisicasFailure(error));
  }
}

export async function deletePessoaFisica(dispatch, getState) {
  const cpf = getState().selectedPessoaFisica.data.cpf;
  try {
    dispatch(deletePessoaFisicaRequest());
    const response = await api.deletePessoaFisica(cpf);
    dispatch(deletePessoaFisicaSuccess(response));
    dispatch(fetchPessoasFisicas);
  } catch (error) {
    dispatch(deletePessoaFisicaFailure(error));
  }
}

export async function createPessoaFisica(dispatch, getState) {
  const pf = getState().selectedPessoaFisica.data;
  try {
    dispatch(createPessoaFisicaRequest());
    const response = await api.savePessoaFisica(pf);
    dispatch(createPessoaFisicaSuccess(response));
    dispatch(fetchPessoasFisicas);
  } catch (error) {
    dispatch(createPessoaFisicaFailure(error));
  }
}

export async function updatePessoaFisica(dispatch, getState) {
  const pf = getState().selectedPessoaFisica.data;
  try {
    dispatch(createPessoaFisicaRequest());
    const response = await api.updatePessoaFisica(pf);
    await dispatch(createPessoaFisicaSuccess(response));
    dispatch(fetchPessoasFisicas);
  } catch (error) {
    dispatch(createPessoaFisicaFailure(error));
  }
}
