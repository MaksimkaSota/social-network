import { http } from './http';

export const getProfileAPI = async (id) => {
  const response = await http.get(`profile/${id}`);
  return await response.data;
};
