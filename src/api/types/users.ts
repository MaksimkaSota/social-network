import { IPhotos } from './http';
import { Nullable } from '../../utils/types/common';

export enum UrlString {
  follow = 'follow/',
}

export interface IUser {
  id: number;
  name: string;
  status: Nullable<string>;
  photos: IPhotos;
  followed: boolean;
}

export interface IUsers {
  items: Array<IUser>;
  totalCount: number;
  error: Nullable<string>;
}
