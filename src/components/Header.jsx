import { history } from '../history';
import { doLogoff } from '../store/User/User.actions';
import { useSelector, useDispatch } from 'react-redux';

export default function Header({ children }) {
  const dispatch = useDispatch();
  const handleSair = () => {
    dispatch(doLogoff());
    history.push('/login');
  };
  const loggedIn = useSelector((state) => state.user);

  return (
    <header>
      <div className="bg-gray-100 mx-auto p-4 flex flex-row justify-between">
        <h1 className="text-center font-semibold text-xl">{children}</h1>
        {loggedIn && (
          <button
            className="bg-purple-800 text-white font-semibold px-8 py-2 rounded-xl"
            onClick={handleSair}
          >
            SAIR
          </button>
        )}
      </div>
    </header>
  );
}
