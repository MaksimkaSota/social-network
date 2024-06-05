import type { Nullable } from './common';

export interface IResponse<D = {}> {
  data: D;
  messages: string[];
  resultCode: number;
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

export interface IPhotos {
  small: Nullable<string>;
  large: Nullable<string>;
}
export interface IContacts {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
}
export interface IResponseProfile {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: IContacts;
  photos: IPhotos;
  aboutMe: string;
}
export type IRequestProfile = Omit<IResponseProfile, 'userId' | 'photos'>;
export interface IPhotoData {
  photos: IPhotos;
}

export interface IUser {
  id: number;
  name: string;
  status: Nullable<string>;
  photos: IPhotos;
  followed: boolean;
}
export interface IUsers {
  items: IUser[];
  totalCount: number;
  error: Nullable<string>;
}

export interface IChatMessage {
  userId: number;
  userName: string;
  message: string;
  photo: string;
}
