import { withFetch, thunkCreator } from 'redux-fetch-duck';
import api from '../api';

const dataSelector = res => res.data.data;

export const getUnivs = thunkCreator('univs', api.getAllUnivs, dataSelector);

export default withFetch('univs')();

