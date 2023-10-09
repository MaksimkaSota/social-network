import { http } from './http';

export const getUsersAPI = (page, pageSize) => {
  return http.get(`users?page=${page}&count=${pageSize}`)
    .then((response) => response.data);
};

export const followAPI = (id) => {
  return http.post(`follow/${id}`)
    .then((response) => response.data);
};

export const unfollowAPI = (id) => {
  return http.delete(`follow/${id}`)
    .then((response) => response.data);
};
