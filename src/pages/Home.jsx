//import { selectAllPessoasFisicas } from '../store/PessoaFisica/PessoaFisica.selects';
import { useSelector } from 'react-redux';
import Cards from '../components/Cards';
import Dashboard from '../components/Dashboard';
import Loader from '../components/Loader';
import Button from '../components/Button';
import { useState } from 'react';
import ModalForm from './ModalForm';
import Modal from 'react-modal';

//import { useState } from 'react';

export default function Home() {
  const pessoasFisicasFromRedux = useSelector((select) => select.pessoaFisica);
  const pfList = [...pessoasFisicasFromRedux.data];
  //{ loading: false, data: [], error: '' };
  const isLoading = pessoasFisicasFromRedux.loading;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createMode, setCreateMode] = useState(true);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) setCreateMode(true);
  };

  const toggleEditModal = () => {
    setIsModalOpen(true);
    setCreateMode(false);
  };

  let buildHome = (
    <div className="p-7 mx-auto my-3 space-y-10 text-center flex-row justify-center ">
      <Loader></Loader>
      <h1>Carregando. Por favor, Aguarde</h1>
    </div>
  );
  if (isLoading === false) {
    buildHome = (
      <div>
        <div className="flex justify-end float-right">
          <Button onButtonClick={toggleModal}>Cadastrar</Button>
        </div>
        <Dashboard>
          {pfList.map((pf) => {
            return (
              <Cards
                key={pf.cpf}
                pessoaFisica={pf}
                doEdit={toggleEditModal}
              ></Cards>
            );
          })}
        </Dashboard>
        <Modal isOpen={isModalOpen} shouldCloseOnEsc={true} ariaHideApp={false}>
          <div className="flex float-right">
            <Button colorClass="bg-red-300" onButtonClick={toggleModal}>
              {` X `}
            </Button>
          </div>
          <ModalForm
            createMode={createMode}
            closeModal={toggleModal}
          ></ModalForm>
        </Modal>
      </div>
    );
  }
  return <div>{buildHome}</div>;
}
