//import { selectAllPessoasFisicas } from '../store/PessoaFisica/PessoaFisica.selects';
import { useSelector } from 'react-redux';
import Cards from '../components/Cards';
import Dashboard from '../components/Dashboard';
import Loader from '../components/Loader';
import Button from '../components/Button';

//import { useState } from 'react';

export default function Home() {
  const pessoasFisicasFromRedux = useSelector((select) => select.pessoaFisica);
  const pfList = [...pessoasFisicasFromRedux.data];
  //{ loading: false, data: [], error: '' };
  const isLoading = pessoasFisicasFromRedux.loading;

  let buildHome = (
    <div className="p-7 mx-auto my-3 space-y-10 text-center flex-row justify-center ">
      <Loader></Loader>
      <h1>Carregando. Por favor, Aguarde</h1>
    </div>
  );
  if (isLoading === false) {
    buildHome = (
      <div>
        <Dashboard>
          {pfList.map((pf) => {
            return <Cards key={pf.cpf} pessoaFisica={pf}></Cards>;
          })}
        </Dashboard>
        <Button>Cadastrar</Button>
      </div>
    );
  }
  return <div>{buildHome}</div>;
}
