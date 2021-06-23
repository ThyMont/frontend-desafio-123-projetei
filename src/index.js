import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './store/store';
import { fetchPessoasFisicas } from './store/PessoaFisica/PessoaFisicaCRUD';
import { Provider } from 'react-redux';

store.dispatch(fetchPessoasFisicas);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
