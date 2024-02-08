import { IPhotos } from './http';

export enum UrlString {
  follow = 'follow/',
}

export interface IUser {
  id: number;
  name: string;
  status: string | null;
  photos: IPhotos;
  followed: boolean;
}

export interface IUsers {
  items: Array<IUser>;
  totalCount: number;
  error: string | null;
}
