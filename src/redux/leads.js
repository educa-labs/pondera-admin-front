import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import api from '../api';

const GET_LEADS_REQUEST = 'GET_LEADS_REQUEST';
const GET_LEADS_SUCCESS = 'GET_LEADS_SUCCESS';
const GET_LEADS_FAILURE = 'GET_LEADS_FAILURE';
const NEXT_PAGE = 'NEXT_PAGE';
const PREV_PAGE = 'PREV_PAGE';

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


/* SELECTORS */

const leadsSelector = state => state.leads.leads;

const page = (state = 0, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return state + 1;
    case PREV_PAGE:
      return state - 1;
    default:
      return state;
  }
};

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

const generateLead = cId => ({
  cId,
  uTitle: 'Universidad de Chile',
  cTitle: 'Cine y Televisión',
  count: '320',
});

const iterator = Array.from(Array(1000).keys());
const initialState = iterator.map(item => generateLead(item));

const leads = (state = initialState, action) => {
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
  page,
});

