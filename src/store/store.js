import { createStore, combineReducers } from 'redux';
import userReducer from './User/User.reducer';
const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;
