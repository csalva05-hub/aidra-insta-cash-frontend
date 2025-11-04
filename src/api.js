import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'https://aidra-insta-cash-backend.onrender.com/api';

const instance = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' }
});

instance.interceptors.request.use(cfg => {
  const token = localStorage.getItem('token');
  if (token) cfg.headers.Authorization = 'Bearer ' + token;
  return cfg;
});

export default instance;
