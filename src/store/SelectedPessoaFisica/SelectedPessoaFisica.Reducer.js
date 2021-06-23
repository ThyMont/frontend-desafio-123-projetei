const initialState = {
  loading: false,
  data: {
    cpf: '',
    name: '',
    phoneNumber: '',
    birthday: '2015/03/25',
  },
  error: '',
};
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case 'SELECT_PESSOA_FISICA':
      return { loading: false, data: action.payload, error: '' };
    case 'DELETE_PESSOA_FISICA_REQUEST':
      return { loading: true, data: state.data, error: '' };
    case 'DELETE_PESSOA_FISICA_SUCCESS':
      return initialState;
    case 'DELETE_PESSOA_FISICA_FAILURE':
      return { data: [], loading: false, error: action.payload };
    case 'UPDATE_PESSOA_FISICA_REQUEST':
      return { loading: true, data: state.data, error: '' };
    case 'UPDATE_PESSOA_FISICA_SUCCESS':
      return { loading: true, data: action.payload, error: '' };
    case 'UPDATE_PESSOA_FISICA_FAILURE':
      return { data: [], loading: false, error: action.payload };
    case 'CREATE_PESSOA_FISICA_REQUEST':
      return { loading: true, data: state.data, error: '' };
    case 'CREATE_PESSOA_FISICA_SUCCESS':
      return { loading: true, data: action.payload, error: '' };
    case 'CREATE_PESSOA_FISICA_FAILURE':
      return { data: [], loading: false, error: action.payload };
    default:
      return { ...state };
  }
}
