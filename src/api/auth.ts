import { http } from './http';

export const getAuthAPI = async () => {
  const response = await http.get(`auth/me`);
  return response.data;
};

export const loginAPI = async (email, password, rememberMe, captcha) => {
  const response = await http.post(`auth/login`, { email, password, rememberMe, captcha });
  return response.data;
};

export const logoutAPI = async () => {
  const response = await http.delete(`auth/login`);
  return response.data;
};

export const getCaptchaUrlAPI = async () => {
  const response = await http.get(`security/get-captcha-url`);
  return response.data;
};
