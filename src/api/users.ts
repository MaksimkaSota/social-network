import { http } from './http';

export const getUsersAPI = async (page, pageSize) => {
  const response = await http.get(`users?page=${page}&count=${pageSize}`);
  return response.data;
};

export const followAPI = async (id) => {
  const response = await http.post(`follow/${id}`);
  return response.data;
};

export const unfollowAPI = async (id) => {
  const response = await http.delete(`follow/${id}`);
  return response.data;
};
