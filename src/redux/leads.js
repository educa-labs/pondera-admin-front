import { createSelector } from 'reselect';
import { withFetch, thunkCreator, types } from 'redux-fetch-duck';
import chunk from 'lodash/chunk';
import is from 'is_js';
import api from '../api';
import { TOGGLE_SELECTION, SET_FILTER_VALUE } from './query';

/** THUNKS */
const dataSelector = res => res.data.data;
export const getLeads = thunkCreator('leads', api.getAllLeads, dataSelector);


/* SELECTORS */

const leadsSelector = state => state.leads.data || [];
const selections = state => state.query.selections;
const filter = state => state.query.filter;
const pageSelector = state => state.leads.page;
/**
 * Filtra los leads segun las universidades selecionadas: selections y el filtro aplicado
 * en la barra de carreras. Luego retorna el resultado en páginas de 30 elementos
*/
export const filteredLeads = createSelector(
  leadsSelector,
  selections,
  filter,
  pageSelector,
  (leads, selec, fil) => {
    const result = leads.filter((item) => {
      let inArray = true;
      if (is.not.empty(selec)) {
        inArray = is.inArray(item.uid, selec);
      }
      return inArray && is.include(item.ctitle.toLowerCase(), fil);
    });
    return chunk(result, 12);
  },
);

export const leadsCount = createSelector(
  leadsSelector,
  data => data.reduce((sum, car) => (
    sum + Number(car.count)
  ), 0),
);

/* PAGE REDUCER */

const NEXT_PAGE = 'NEXT_PAGE';
export const nextPage = () => ({
  type: NEXT_PAGE,
});
const fetchTypes = types('leads');
const page = (state = 0, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return state + 1;
    case TOGGLE_SELECTION:
    case SET_FILTER_VALUE:
    case fetchTypes.success:
      return 0;
    default:
      return state;
  }
};

export default withFetch('leads')({ page });
