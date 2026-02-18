import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL || 'https://scholarbay-9bcq.onrender.com/api';
export const backendRoot = baseURL.replace(/\/api\/?$/, '');

const api = axios.create({
  baseURL,
  timeout: 60000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('sb_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED') {
      error.message = 'Request timeout. The server may be waking up—please try again.';
    } else if (!error.response) {
      error.message = `Network error: ${error.message}. Check if the server is running.`;
    }
    return Promise.reject(error);
  }
);

export default api;

