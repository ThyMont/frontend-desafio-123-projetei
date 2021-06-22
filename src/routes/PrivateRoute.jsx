import { Route, Redirect } from 'react-router';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ component, ...props }) {
  const loggedIn = useSelector((state) => state.user);
  return loggedIn ? (
    <Route {...props} component={component} />
  ) : (
    <Redirect from="*" to="/login" />
  );
}
