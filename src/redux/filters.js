import is from 'is_js';


const SELECT_UNIVERSITY = 'SELECT_UNIVERSITY';
const DESELECT_UNIVERSITY = 'DESELECT_UNIVERSITY';

/* ACTION CREATORS */

export const selectUniversity = id => ({
  type: SELECT_UNIVERSITY,
  id,
})

export const delsectUniversity = id => ({
  type: DESELECT_UNIVERSITY,
  id,
})


export default (state = [], action) => {
  switch (action.type) {
    case SELECT_UNIVERSITY:
      if (is.not.inArray(action.id, state))
        return [...state, action.id];
      return state;
    case DESELECT_UNIVERSITY:
      if (is.inArray(action.id, state)) {
        return state.filter(sel => sel !== action.id);
      }
      return state;
    default:
      return state;
  }
}