import { Nullable } from '../../utils/types/common';

export enum UrlString {
  social_network = 'https://social-network.samuraijs.com/api/1.0/',
}

export enum HeaderValue {
  multipart_form_data = 'multipart/form-data',
}

export interface IResponse<D = {}> {
  data: D;
  messages: Array<string>;
  resultCode: number;
}

export interface IPhotos {
  small: Nullable<string>;
  large: Nullable<string>;
}
