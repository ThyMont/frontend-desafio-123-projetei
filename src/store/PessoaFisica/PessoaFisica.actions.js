export function fetchPessoasFisicasRequest() {
  return {
    type: 'FETCH_PESSOAS_FISICAS_REQUEST',
  };
}
export const fetchPessoasFisicasSuccess = (pessoasFisicas) => (dispatch) => {
  return dispatch({
    type: 'FETCH_PESSOAS_FISICAS_SUCCESS',
    payload: pessoasFisicas,
  });
};
export function fetchPessoasFisicasFailure(error) {
  return {
    type: 'FETCH_PESSOAS_FISICAS_FAILURE',
    payload: error,
  };
}
