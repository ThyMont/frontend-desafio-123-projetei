import { Route, Redirect } from 'react-router';
export default function PrivateRoute({ component, ...props }) {
  const loggedIn = !!localStorage.getItem('app-token');
  console.log(props);
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
