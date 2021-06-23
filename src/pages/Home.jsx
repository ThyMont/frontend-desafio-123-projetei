//import { selectAllPessoasFisicas } from '../store/PessoaFisica/PessoaFisica.selects';
import { useSelector } from 'react-redux';
//import { useState } from 'react';

export default function Home() {
  const pessoasFisicasFromRedux = useSelector((select) => select.pessoaFisica);
  //{ loading: false, data: [], error: '' };
  const isLoading = pessoasFisicasFromRedux.loading;
  return <div>ESTOU NA HOME</div>;
}
