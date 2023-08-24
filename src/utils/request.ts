import axios from 'axios';
import { ElMessage } from 'element-plus';
import useUserStore from '@/store/modules/user';

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 5000,
});

request.interceptors.request.use((config) => {
  const userStore = useUserStore();
  if (userStore.token) {
    config.headers.token = userStore.token;
  }
  return config;
});

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    let message = '';
    let status = error.response.status;
    switch (status) {
      case 401:
        message = 'token invailed';
        break;
      case 403:
        message = 'forbidden';
        break;
      case 404:
        message = 'not found';
        break;
      case 500:
        message = 'service error';
        break;
      default:
        message = 'unkonw error';
        break;
    }
    ElMessage({
      type: 'error',
      message,
    });

    return Promise.reject(error);
  },
);

export default request;
