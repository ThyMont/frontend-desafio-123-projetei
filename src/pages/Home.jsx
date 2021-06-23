import { selectAllPessoasFisicas } from '../store/PessoaFisica/PessoaFisica.selects';
import { useSelector } from 'react-redux';
//import { useState } from 'react';

export default function Home() {
  const pessoasFisicasFromRedux = useSelector(selectAllPessoasFisicas);
  //const [isModalOn, setIsModalOn] = useState(false);
  console.log(pessoasFisicasFromRedux);
  return <div>ESTOU NA HOME</div>;
}
