import { createStore, combineReducers } from 'redux';
import userReducer from './User/User.reducer';
import loaderReducer from './Loader/Loader.reducer';
import pessoaFisicaReducer from './PessoaFisica/PessoaFisica.reducer';
import storeSynchronize from 'redux-localstore';
const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  pessoaFisica: pessoaFisicaReducer,
});

const store = createStore(rootReducer);

export default store;
storeSynchronize(store);
