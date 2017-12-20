import { combineReducers } from 'redux';
import api from '../api';

const GET_LEADS_REQUEST = 'GET_LEADS_REQUEST';
const GET_LEADS_SUCCESS = 'GET_LEADS_SUCCESS';
const GET_LEADS_FAILURE = 'GET_LEADS_FAILURE';

const getLeadsRequest = () => ({
  type: GET_LEADS_REQUEST,
});

const getLeadsSuccess = leads => ({
  type: GET_LEADS_SUCCESS,
  leads,
});

const getLeadsFailure = error => ({
  type: GET_LEADS_FAILURE,
  error,
});

export const getLeads = token => (
  async (dispatch) => {
    dispatch(getLeadsRequest());
    try {
      const res = await api.getAllLeads(token);
      dispatch(getLeadsSuccess(res.data.data));
    } catch (err) {
      dispatch(getLeadsFailure(err));
    }
  }
);


const loading = (state = false, action) => {
  switch (action.type) {
    case GET_LEADS_REQUEST:
      return true;
    case GET_LEADS_FAILURE:
    case GET_LEADS_SUCCESS:
      return false;
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case GET_LEADS_FAILURE:
      return action.error;
    default:
      return state;
  }
};

const leads = (state = null, action) => {
  switch (action.type) {
    case GET_LEADS_SUCCESS:
      return action.leads;
    default:
      return state;
  }
};

export default combineReducers({
  leads,
  loading,
  error,
});

