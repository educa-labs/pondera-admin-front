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