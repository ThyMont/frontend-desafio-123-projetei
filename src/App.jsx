import Header from './components/Header';
import Main from './components/Main';
import Router from './routes';

export default function App() {
  return (
    <div>
      <Header>Frontend - desafio 123 Projetei</Header>
      <Main>
        <Router />
      </Main>
    </div>
  );
}
