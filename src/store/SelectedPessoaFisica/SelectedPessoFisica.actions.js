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
export const deletePessoaFisicaSuccess = (pessoasFisicas) => (dispatch) => {
  return dispatch({
    type: 'DELETE_PESSOA_FISICA_SUCCESS',
    payload: pessoasFisicas,
  });
};
export function deletePessoaFisicaFailure(error) {
  return {
    type: 'DELETE_PESSOA_FISICA_FAILURE',
    payload: error,
  };
}
