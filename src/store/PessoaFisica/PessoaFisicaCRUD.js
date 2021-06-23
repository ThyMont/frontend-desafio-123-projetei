import {
  fetchPessoasFisicasRequest,
  fetchPessoasFisicasSuccess,
  fetchPessoasFisicasFailure,
} from '../PessoaFisica/PessoaFisica.actions';
import * as api from '../../api';
import {
  deletePessoaFisicaFailure,
  deletePessoaFisicaRequest,
  deletePessoaFisicaSuccess,
} from '../SelectedPessoaFisica/SelectedPessoFisica.actions';

export async function fetchPessoasFisicas(dispatch, _getState) {
  try {
    dispatch(fetchPessoasFisicasRequest());

    const response = await api.getAllPessoasFisicas();

    dispatch(fetchPessoasFisicasSuccess(response));
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
