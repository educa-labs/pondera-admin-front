import { combineReducers } from 'redux';
import * as api from '../api';

const GET_UNIVS_REQUEST = 'GET_UNIVS_REQUEST';
const GET_UNIVS_SUCCESS = 'GET_UNIVS_SUCCESS';
const GET_UNIVS_FAILURE = 'GET_UNIVS_FAILURE';

const getUnivsRequest = () => ({
  type: GET_UNIVS_REQUEST,
});

const getUnivsSuccess = univs => ({
  type: GET_UNIVS_SUCCESS,
  univs,
});

const getUnivsFailure = error => ({
  type: GET_UNIVS_FAILURE,
  error,
});

export const getUnivs = token => (
  async (dispatch) => {
    dispatch(getUnivsRequest());
    try {
      const res = await api.getAllUnivs(token);
      dispatch(getUnivsSuccess(res.data.data));
    } catch (err) {
      dispatch(getUnivsFailure(err));
    }
  }
);


const loading = (state = false, action) => {
  switch (action.type) {
    case GET_UNIVS_REQUEST:
      return true;
    case GET_UNIVS_FAILURE:
    case GET_UNIVS_SUCCESS:
      return false;
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case GET_UNIVS_FAILURE:
      return action.error;
    default:
      return state;
  }
};

const univs = (state = null, action) => {
  switch (action.type) {
    case GET_UNIVS_SUCCESS:
      return action.univs;
    default:
      return state;
  }
};

export default combineReducers({
  univs,
  loading,
  error,
});

