import { combineReducers } from 'redux';
import api from '../api';

const GET_COUNT_REQUEST = 'GET_COUNT_REQUEST';
const GET_COUNT_SUCCESS = 'GET_COUNT_SUCCESS';
const GET_COUNT_FAILURE = 'GET_COUNT_FAILURE';

const getCountRequest = () => ({
  type: GET_COUNT_REQUEST,
});

const getCountSuccess = count => ({
  type: GET_COUNT_SUCCESS,
  count,
});

const getCountFailure = error => ({
  type: GET_COUNT_FAILURE,
  error,
});

export const getCount = token => (
  async (dispatch) => {
    dispatch(getCountRequest());
    try {
      const res = await api.getCount(token);
      dispatch(getCountSuccess(res.data.data[0].count));
    } catch (err) {
      dispatch(getCountFailure(err));
    }
  }
);


const loading = (state = false, action) => {
  switch (action.type) {
    case GET_COUNT_REQUEST:
      return true;
    case GET_COUNT_FAILURE:
    case GET_COUNT_SUCCESS:
      return false;
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case GET_COUNT_FAILURE:
      return action.error;
    default:
      return state;
  }
};

const count = (state = null, action) => {
  switch (action.type) {
    case GET_COUNT_SUCCESS:
      return action.count;
    default:
      return state;
  }
};

export default combineReducers({
  count,
  loading,
  error,
});

