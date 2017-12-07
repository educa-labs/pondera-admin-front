import is from 'is_js';


const TOGGLE_SELECTION = 'TOGGLE_SELECTION';

/* ACTION CREATORS */

export const toggleSelection = id => ({
  type: TOGGLE_SELECTION,
  id,
})


export default (state = [], action) => {
  switch (action.type) {
    case TOGGLE_SELECTION:
      if (is.inArray(action.id, state)) {
        return state.filter(sel => sel !== action.id);
      }
      return [...state, action.id];
    default:
      return state;
  }
}