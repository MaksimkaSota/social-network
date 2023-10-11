import { http } from './http';

export const getAuthAPI = async () => {
  const response = await http.get(`auth/me`);
  return await response.data;
};
