import { http } from './http';

export const getAuthAPI = async () => {
  const response = await http.get(`auth/me`);
  return await response.data;
};

export const loginAPI = async (email, password, rememberMe, captcha) => {
  const response = await http.post(`auth/login`, {email, password, rememberMe, captcha});
  return await response.data;
};

export const logoutAPI = async () => {
  const response = await http.delete(`auth/login`);
  return await response.data;
};

export const getCaptchaUrlAPI = async () => {
  const response = await http.get(`security/get-captcha-url`);
  return await response.data;
};
