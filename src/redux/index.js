import { combineReducers } from 'redux';
import createFormReducer from 'redux-duck-form';
import query from './query';
import careers from './careers';
import session from './session';

const loginForm = createFormReducer('loginForm', ['mail', 'password']);

export default combineReducers({
  query,
  careers,
  loginForm,
  token: session,
});
