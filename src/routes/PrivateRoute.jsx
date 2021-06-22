import { Route, Redirect } from 'react-router';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ component, ...props }) {
  const loggedIn = useSelector((state) => state.user);

  //const loggedIn = !!localStorage.getItem('app-token');

  // return (
  //   <Route
  //     {...props}
  //     render={() => (loggedIn ? component : <Redirect from="*" to="/login" />)}
  //   ></Route>
  // );
  return loggedIn ? (
    <Route {...props} component={component} />
  ) : (
    <Redirect from="*" to="/login" />
  );
}
