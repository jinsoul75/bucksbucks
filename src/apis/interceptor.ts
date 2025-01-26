import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (response) {
    // 2xx 응답 처리
    return response;
  },
  function (error) {
    // 에러 응답 처리
    if (error.response.status === 401) {
      // 인증 에러 처리
      localStorage.removeItem('accessToken');
      window.location.href = '/login';
    }
    if (error.response.status === 403) {
      // 권한 없음 처리
      // TODO: 리프레시토큰으로 엑세스토큰재발급
      alert('접근 권한이 없습니다.');
    }
    return Promise.reject(error);
  },
);

export default instance;
