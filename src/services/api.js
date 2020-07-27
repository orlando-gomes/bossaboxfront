import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'http://134.122.124.121:3000',
});

export function setHeaderAuthorization() {
  if (!api.defaults.headers.Authorization) {
    const localPersistence = JSON.parse(
      localStorage.getItem('persist:bossaboxfront')
    );
    const persistenceAuth = JSON.parse(localPersistence.auth);
    api.defaults.headers.Authorization = `Bearer ${persistenceAuth.token}`;
  }
}

export default api;
