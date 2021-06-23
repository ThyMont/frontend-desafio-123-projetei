import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  createPessoaFisica,
  updatePessoaFisica,
} from '../store/PessoaFisica/PessoaFisicaCRUD';
import { selectPessoaFisica } from '../store/SelectedPessoaFisica/SelectedPessoFisica.actions';

export default function ModalForm({ createMode = false, closeModal = null }) {
  const selectedPessoaFisicaState = useSelector(
    (state) => state.selectedPessoaFisica.data
  );

  const today = createMode
    ? new Date()
    : new Date(selectedPessoaFisicaState.birthday);

  const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1)
    .toString()
    .padStart('2', '0')}-${today.getDate()}`;

  const initialFormState = createMode
    ? {
        cpf: '',
        name: '',
        phoneNumber: '',
        birthday: formattedDate,
      }
    : { ...selectedPessoaFisicaState, birthday: formattedDate };

  const dispatch = useDispatch();
  const handleFormSubmit = async (pf) => {
    if (createMode) {
      dispatch(selectPessoaFisica(pf));
      dispatch(createPessoaFisica);
    } else {
      dispatch(selectPessoaFisica(pf));
      dispatch(updatePessoaFisica);
    }
    if (closeModal) await closeModal();
  };

  const validations = yup.object().shape({
    cpf: yup
      .string()
      .max(14, 'CPF grande demais')
      .required('O CPF é Obrigatório'),
    name: yup.string().required('Nome Obrigatório'),
    phoneNumber: yup
      .string()
      .min(10, 'Telefone Inválido')
      .required('Insira um número para contato'),
  });

  const backgroundClassName = createMode ? 'bg-green-100' : 'bg-yellow-100';
  return (
    <div className={`${backgroundClassName} p-4`}>
      <h2 className="text-center text-xl font-semibold">
        {createMode ? 'Cadastro de Pessoa Fisica' : 'Editar Pessoa Fisica'}
      </h2>
      <Formik
        initialValues={initialFormState}
        onSubmit={handleFormSubmit}
        validationSchema={validations}
      >
        <Form className=" shadow-md rounded px-8 pt-6 pb-8 mb-10 mx-10 flex flex-col">
          <div className="mb-4 ">
            <label
              className="text-black block text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nome
            </label>
            <Field
              name="name"
              className="shadow-md bg-blue-200 hover:bg-blue-300 appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            />
            <ErrorMessage
              component="span"
              name="name"
              className="text-yellow-300 font-semibold"
            ></ErrorMessage>
          </div>
          <div className="mb-4 ">
            <label
              className="text-black block text-sm font-bold mb-2"
              htmlFor="cpf"
            >
              CPF
            </label>
            <Field
              name="cpf"
              className="shadow-md bg-blue-200 hover:bg-blue-300 appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              readOnly={!createMode}
            />
            <ErrorMessage
              component="span"
              name="cpf"
              className="text-yellow-300 font-semibold"
            ></ErrorMessage>
          </div>
          <div className="mb-4 ">
            <label
              className="text-black block text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Telefone
            </label>
            <Field
              name="phoneNumber"
              className="shadow-md bg-blue-200 hover:bg-blue-300 appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            />
            <ErrorMessage
              component="span"
              name="phoneNumber"
              className="text-yellow-300 font-semibold"
            ></ErrorMessage>
          </div>
          <div className="mb-4 ">
            <label
              className="text-black block text-sm font-bold mb-2"
              htmlFor="birthday"
            >
              Data de Nascimento
            </label>
            <Field
              type="date"
              name="birthday"
              className="shadow-md bg-blue-200 hover:bg-blue-300 appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            />
            <ErrorMessage
              component="span"
              name="birthday"
              className="text-yellow-300 font-semibold"
            ></ErrorMessage>
          </div>
          <div className="flex items-center ">
            <button
              className="shadow-2xl mx-auto bg-yellow-400 hover:bg-yellow-600 hover:text-white text-black font-bold py-2 px-4 rounded"
              type="reset"
            >
              {createMode ? 'Limpar' : 'Reiniciar'}
            </button>
            <button
              className="shadow-2xl mx-auto bg-blue-300 hover:bg-blue-700 hover:text-white text-black font-bold py-2 px-4 rounded"
              type="submit"
            >
              Salvar
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
