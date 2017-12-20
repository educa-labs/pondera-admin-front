import axios from 'axios';

const request = axios.create({
  baseURL: 'https://api.pondera.cl/api/v1',
  // withCredentials: true,
  responseType: 'json',
  timeout: 2000,
});

export const createSession = data => (
  request.post('/session', data)
);

export const getAllLeads = token => (
  request.get('admin/stats', {
    headers: {
      Authorization: token,
    },
  })
);

export const getAllUnivs = token => (
  request.get('/tuni/universities', {
    headers: {
      Authorization: token,
    },
  })
);
