export function selectPessoaFisica(pessoaFisica) {
  return {
    type: 'SELECT_PESSOA_FISICA',
    payload: pessoaFisica,
  };
}
export function deletePessoaFisicaRequest() {
  return {
    type: 'DELETE_PESSOA_FISICA_REQUEST',
  };
}
export const deletePessoaFisicaSuccess = (pessoaFisica) => (dispatch) => {
  return dispatch({
    type: 'DELETE_PESSOA_FISICA_SUCCESS',
    payload: pessoaFisica,
  });
};
export function deletePessoaFisicaFailure(error) {
  return {
    type: 'DELETE_PESSOA_FISICA_FAILURE',
    payload: error,
  };
}

export function updatePessoaFisicaRequest() {
  return {
    type: 'UPDATE_PESSOA_FISICA_REQUEST',
  };
}
export const updatePessoaFisicaSuccess = (pessoaFisica) => (dispatch) => {
  return dispatch({
    type: 'UPDATE_PESSOA_FISICA_SUCCESS',
    payload: pessoaFisica,
  });
};
export function updatePessoaFisicaFailure(error) {
  return {
    type: 'UPDATE_PESSOA_FISICA_FAILURE',
    payload: error,
  };
}

export function createPessoaFisicaRequest() {
  return {
    type: 'CREATE_PESSOA_FISICA_REQUEST',
  };
}
export const createPessoaFisicaSuccess = (pessoaFisica) => (dispatch) => {
  return dispatch({
    type: 'CREATE_PESSOA_FISICA_SUCCESS',
    payload: pessoaFisica,
  });
};
export function createPessoaFisicaFailure(error) {
  return {
    type: 'CREATE_PESSOA_FISICA_FAILURE',
    payload: error,
  };
}
