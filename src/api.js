import axios from 'axios';

const api = axios.create({
  baseURL: 'https://aidra-insta-cash-backend.onrender.com/api', // ✅ includes /api
});

export default api;
