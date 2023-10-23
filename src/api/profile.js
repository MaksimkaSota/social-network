import { http } from './http';

export const getProfileAPI = async (id) => {
  const response = await http.get(`profile/${id}`);
  return await response.data;
};

export const getStatusAPI = async (id) => {
  const response = await http.get(`profile/status/${id}`);
  return await response.data;
};

export const updateStatusAPI = async (status) => {
  const response = await http.put(`profile/status`, {status});
  return await response.data;
};
