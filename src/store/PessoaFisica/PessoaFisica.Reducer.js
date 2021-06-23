const initialState = { loading: false, data: [], error: '' };

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PESSOAS_FISICAS_REQUEST':
      return { loading: true, data: [], error: '' };
    case 'FETCH_PESSOAS_FISICAS_SUCCESS':
      return { loading: false, data: action.payload, error: '' };
    case 'FETCH_PESSOAS_FISICAS_FAILURE':
      return { data: [], loading: false, error: action.payload };
    default:
      return { ...state };
  }
}
