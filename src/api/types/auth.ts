export enum UrlString {
  me = 'auth/me/',
  login_logout = 'auth/login/',
  captcha = 'security/get-captcha-url/',
}

export interface IAuthData {
  id: number;
  email: string;
  login: string;
}

export interface ILoginData {
  userId: number;
}

export interface ICaptcha {
  url: string;
}
