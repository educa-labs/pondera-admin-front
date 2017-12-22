import axios from 'axios';

const request = axios.create({
  baseURL: 'https://testapi.pondera.cl/api/v1',
  // withCredentials: true,
  responseType: 'json',
  timeout: 2000,
});

const createSession = data => (
  request.post('/session/admin', data)
);

const getAllLeads = token => (
  request.get('/admin/stats', {
    headers: {
      Authorization: token,
    },
  })
);

const getAllUnivs = token => (
  request.get('/tuni/universities', {
    headers: {
      Authorization: token,
    },
  })
);

const getCount = token => (
  request.get('/users/count', {
    Authorization: token,
  })
);

export default {
  createSession,
  getAllLeads,
  getAllUnivs,
  getCount,
};
