import { Router, Switch, Route } from 'react-router';
import Home from '../pages/Home';
import Login from '../pages/Login';
import { history } from '../history';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route component={Login} exact path="/login" />
        <PrivateRoute component={Home} exact path="/" />
        <PrivateRoute component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
