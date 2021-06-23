const initialState = { loading: false, data: [], error: '' };

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action) {
    case 'FETCH_PESSOAS_FISICAS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_PESSOAS_FISICAS_SUCCESS':
      return { data: action.payload, loading: false, error: '' };
    case 'FETCH_PESSOAS_FISICAS_FAILURE':
      return { data: [], loading: false, error: action.payload };
    default:
      return { ...state };
  }
}
