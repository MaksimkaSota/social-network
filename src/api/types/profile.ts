import { IPhotos } from './http';

export enum UrlString {
  profile = 'profile/',
  status = 'profile/status/',
  photo = 'profile/photo/',
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

export interface IPhotoData {
  photos: IPhotos;
}

export type IRequestProfile = Omit<IResponseProfile, 'userId' | 'photos'>;
