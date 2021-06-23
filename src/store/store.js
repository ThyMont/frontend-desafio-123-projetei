import { createStore, combineReducers, applyMiddleware } from 'redux';
import storeSynchronize from 'redux-localstore';
import thunk from 'redux-thunk';
import userReducer from './User/User.reducer';
import pessoaFisicaReducer from './PessoaFisica/PessoaFisica.Reducer';
import selectedPessoFisicaReducer from './SelectedPessoaFisica/SelectedPessoaFisica.Reducer';
const rootReducer = combineReducers({
  user: userReducer,
  pessoaFisica: pessoaFisicaReducer,
  selectedPessoaFisica: selectedPessoFisicaReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
storeSynchronize(store);
