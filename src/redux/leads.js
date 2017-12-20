import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import is from 'is_js';
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
const selections = state => state.query.selections;
const filter = state => state.query.filter;
const pageSelector = state => state.leads.page;

export const filteredLeads = createSelector(
  leadsSelector,
  selections,
  filter,
  pageSelector,
  (leads, selec, fil, pag) => {
    const result = leads.filter((item) => {
      let inArray = true;
      if (is.not.empty(selec)) {
        inArray = is.inArray(item.uId, selec);
      }
      return inArray && is.include(item.cTitle.toLowerCase(), fil);
    });
    if (result.length >= 30) {
      return result.slice(pag * 30, (pag + 1) * 30);
    }
    return result;
  },
);

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

const generateLead = (cId) => {
  if (cId % 2 === 1) {
    return ({
      cId,
      uId: 10,
      uTitle: 'Adolfo',
      cTitle: 'BBBBBB',
      count: '320',
    });
  }
  return ({
    cId,
    uId: 6,
    uTitle: 'PUC',
    cTitle: 'AAAAAA',
    count: '320',
  });
};

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

