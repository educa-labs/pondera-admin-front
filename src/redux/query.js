import is from 'is_js';
import { combineReducers } from 'redux';

export const TOGGLE_SELECTION = 'TOGGLE_SELECTION';
export const SET_FILTER_VALUE = 'SET_FILTER_VALUE';
export const TOGGLE_SORT = 'TOGGLE_SORT';

/* ACTION CREATORS */

export const toggleSelection = id => ({
  type: TOGGLE_SELECTION,
  id,
});

export const toggleSort = () => ({
  type: TOGGLE_SORT,
});

export const setFilterValue = value => ({
  type: SET_FILTER_VALUE,
  value,
});

const sort = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_SORT:
      return !state;
    default:
      return state;
  }
};

const selections = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_SELECTION:
      if (is.inArray(action.id, state)) {
        return state.filter(sel => sel !== action.id);
      }
      return [...state, action.id];
    default:
      return state;
  }
};

const filter = (state = '', action) => {
  switch (action.type) {
    case SET_FILTER_VALUE:
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({
  selections,
  filter,
  sort,
});
