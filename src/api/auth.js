import { http } from './http';

export const getAuthAPI = () => {
  return  http.get(`auth/me`)
    .then((response) => response.data);
};
