import { combineReducers } from 'redux';
import createFormReducer from 'redux-duck-form';
import query from './query';
import careers from './careers';
import session from './session';
import leads from './leads';
import univs from './univs';
import count from './count';

const loginForm = createFormReducer('loginForm', ['mail', 'password']);

export default combineReducers({
  query,
  careers,
  loginForm,
  leads,
  univs,
  userCount: count,
  token: session,
});
