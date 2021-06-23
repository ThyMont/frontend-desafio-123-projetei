import { createStore, combineReducers, applyMiddleware } from 'redux';
import storeSynchronize from 'redux-localstore';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';

import * as api from '../api';

import userReducer from './User/User.reducer';
import pessoaFisicaReducer from './PessoaFisica/PessoaFisica.Reducer';
import {
  fetchPessoasFisicasRequest,
  fetchPessoasFisicasSuccess,
  fetchPessoasFisicasFailure,
} from './PessoaFisica/PessoaFisica.actions';

const rootReducer = combineReducers({
  user: userReducer,
  pessoaFisica: pessoaFisicaReducer,
});
//const composedEnhancer = composeWithDevTools(applyMiddleware(thunk, promise));

//const store = createStore(rootReducer, composedEnhancer);
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
storeSynchronize(store);

export async function fetchTodos(dispatch, _getState) {
  try {
    dispatch(fetchPessoasFisicasRequest());

    const response = await api.getAllPessoasFisicas();

    dispatch(fetchPessoasFisicasSuccess(response));
  } catch (error) {
    dispatch(fetchPessoasFisicasFailure(error));
  }
}
