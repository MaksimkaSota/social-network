import { http } from './http';
import { UrlSubString } from '../../utils/types/enums';
import type { IAuthData, ICaptcha, ILoginData, IResponse } from '../../utils/types/api';

export const getAuthAPI = async (): Promise<IResponse<IAuthData>> => {
  const response = await http.get(UrlSubString.me);
  return response.data;
};

export const loginAPI = async (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
): Promise<IResponse<ILoginData>> => {
  const response = await http.post(UrlSubString.login_logout, { email, password, rememberMe, captcha });
  return response.data;
};

export const logoutAPI = async (): Promise<IResponse> => {
  const response = await http.delete(UrlSubString.login_logout);
  return response.data;
};

export const getCaptchaUrlAPI = async (): Promise<ICaptcha> => {
  const response = await http.get(UrlSubString.captcha);
  return response.data;
};
