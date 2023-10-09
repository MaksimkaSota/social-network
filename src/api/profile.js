import { http } from './http';

export const getProfileAPI = (id) => {
  return  http.get(`profile/${id}`)
    .then((response) => response.data);
};
