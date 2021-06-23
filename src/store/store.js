import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './User/User.reducer';
import pessoaFisicaReducer from './PessoaFisica/PessoaFisica.Reducer';
import storeSynchronize from 'redux-localstore';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  user: userReducer,
  pessoaFisica: pessoaFisicaReducer,
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
storeSynchronize(store);
