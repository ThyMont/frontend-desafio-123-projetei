import Header from './components/Header';
import Main from './components/Main';
import Router from './routes';
import * as api from './api';
import { useEffect, useState } from 'react';

export default function App() {
  const [pessoasFisicas, setPessoasFisicas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const findPF = async () => {
      const apiPessoasFisicas = await api.getAllPessoasFisicas();
      setPessoasFisicas(apiPessoasFisicas);
    };
    findPF();
  }, []);

  return (
    <div>
      <Header>Frontend - desafio 123 Projetei</Header>
      <Main>
        <Router />
      </Main>
    </div>
  );
}
