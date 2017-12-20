import { combineReducers } from 'redux';

const ADD_CAREER = 'ADD_CAREER';
const REMOVE_CAREER = 'REMOVE_CAREER';

export const removeCareer = (id, count) => ({
  type: REMOVE_CAREER,
  id,
  count,
});

export const addCareer = (id, count) => ({
  type: ADD_CAREER,
  id,
  count,
});


const careers = (state = [], action) => {
  switch (action.type) {
    case ADD_CAREER:
      return [...state, action.id];
    case REMOVE_CAREER:
      return state.filter(sel => sel !== action.id);
    default:
      return state;
  }
};

const count = (state = 0, action) => {
  switch (action.type) {
    case ADD_CAREER:
      return state + Number(action.count);
    case REMOVE_CAREER:
      return state - Number(action.count);
    default:
      return state;
  }
};

export default combineReducers({
  careers,
  count,
});
