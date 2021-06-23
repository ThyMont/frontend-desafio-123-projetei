import {
  AiOutlineEdit as EditIcon,
  AiOutlineDelete as DeleteIcon,
} from 'react-icons/ai';
// import { useSelector, useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deletePessoaFisica } from '../store/PessoaFisica/PessoaFisicaCRUD';
import { selectPessoaFisica } from '../store/SelectedPessoaFisica/SelectedPessoFisica.actions';

export default function Cards({
  pessoaFisica = {
    cpf: '999.999.999-99',
    name: 'Nome',
    phoneNumber: '(21) 12345-6789',
    birthday: '2015/03/25',
  },
  doEdit,
}) {
  const { cpf, name, phoneNumber } = pessoaFisica;
  const birthday = new Date(pessoaFisica.birthday);
  const dispatch = useDispatch();
  // const pf = useSelector((state) => state.selectedPessoFisica);
  // console.log(pf);

  function handleDeleteIconClick() {
    dispatch(selectPessoaFisica(pessoaFisica));
    dispatch(deletePessoaFisica);
  }

  function handleEditIconClick() {
    dispatch(selectPessoaFisica(pessoaFisica));
    doEdit();
  }
  return (
    <div className="relative bg-white py-6 px-6 rounded-3xl w-64 h-60 my-4 shadow-xl">
      <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
        {name}
      </div>
      <div className="mt-8">
        <p className="text-base font-semibold my-2">CPF: {cpf}</p>
        <div className="flex space-x-2 text-gray-400 text-sm">
          <p>Telefone: {phoneNumber}</p>
        </div>
        <div className="flex space-x-2 text-gray-400 text-sm my-3">
          {/* <!-- svg  --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p>{`${birthday.getDate()}/${
            birthday.getMonth() + 1
          }/${birthday.getFullYear()}`}</p>
        </div>
        <div className="border-t-2">
          <div className="mt-4 flex flex-row items-center justify-end space-x-4">
            <EditIcon
              onClick={handleEditIconClick}
              className="cursor-pointer"
              size={24}
            />

            <DeleteIcon
              onClick={handleDeleteIconClick}
              className="cursor-pointer"
              size={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
