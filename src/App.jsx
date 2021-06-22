import Header from './components/Header';
import Main from './components/Main';

export default function App() {
  console.log('Teste no console do navegador');

  return (
    <div>
      <Header>Frontend - desafio 123 Projetei</Header>
      <Main>
        <h2>O conteúdo fica aqui.</h2>
      </Main>
    </div>
  );
}
