import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './User/User.reducer';
import pessoaFisicaReducer from './PessoaFisica/PessoaFisica.Reducer';
import storeSynchronize from 'redux-localstore';

const rootReducer = combineReducers({
  user: userReducer,
  pessoaFisica: pessoaFisicaReducer,
});

const store = createStore(rootReducer);

export default store;
storeSynchronize(store);
