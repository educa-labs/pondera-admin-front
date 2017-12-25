import { withFetch, thunkCreator } from 'redux-fetch-duck';
import api from '../api';

const dataSelector = res => res.data.data[0].count;
export const getCount = thunkCreator('count', api.getCount, dataSelector);

export default withFetch('count')();
