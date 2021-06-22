import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { auth } from '../api';
import { history } from '../history';

export default function Login() {
  const handleSubmit = (values) => {
    const user = auth(values);
    if (user) {
      localStorage.setItem('app-token', user);
      history.push('/');
    } else {
      alert('Login Inválido');
    }
  };
  const validations = yup.object().shape({
    username: yup.string().required('*Username Obrigatório'),
    password: yup
      .string()
      .min(6, '*A senha deve conter pelo menos 6 caracteres')
      .required('*Senha Obrigatória'),
  });
  return (
    <div>
      <h1 className="text-center m-2   p-4 text-2xl font-semibold shadow-2xl bg-purple-400 border-2 border-purple-700 rounded-lg">
        Login
      </h1>
      <Formik
        initialValues={{}}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        <Form className="bg-purple-800 shadow-md rounded px-8 pt-6 pb-8 mb-10 mx-10 flex flex-col">
          <div className="mb-4 ">
            <label
              className="text-gray-200 block text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <Field
              name="username"
              className="shadow-md bg-purple-500 hover:bg-purple-600 appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            />
            <ErrorMessage
              component="span"
              name="username"
              className="text-yellow-300 font-semibold"
            ></ErrorMessage>
          </div>
          <div className="mb-4 ">
            <label
              className="text-gray-200 block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <Field
              name="password"
              className="shadow-md bg-purple-500 hover:bg-purple-600 appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              type="password"
              placeholder="******************"
            />
            <ErrorMessage
              component="span"
              name="password"
              className="text-yellow-300 font-semibold"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="shadow-2xl mx-auto bg-blue-200 hover:bg-blue-500 text-black font-bold py-2 px-4 rounded"
              type="submit"
            >
              Entrar
            </button>
          </div>
          <div className="text-gray-300 text-xs">
            <p>
              <strong>User: </strong>admin@admin.com
            </p>
            <p>
              <strong>Password: </strong>admin123
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
