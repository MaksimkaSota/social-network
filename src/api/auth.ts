import { http } from './http';
import { IAuthData, ICaptchaData, ILoginData, UrlString } from './types/auth';
import { IResponse } from './types/http';

export const getAuthAPI = async (): Promise<IResponse<IAuthData>> => {
  const response = await http.get(UrlString.me);
  return response.data;
};

export const loginAPI = async (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
): Promise<IResponse<ILoginData>> => {
  const response = await http.post(UrlString.login_logout, { email, password, rememberMe, captcha });
  return response.data;
};

export const logoutAPI = async (): Promise<IResponse> => {
  const response = await http.delete(UrlString.login_logout);
  return response.data;
};

export const getCaptchaUrlAPI = async (): Promise<ICaptchaData> => {
  const response = await http.get(UrlString.captcha);
  return response.data;
};
