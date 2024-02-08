export interface IResponse<D = {}> {
  data: D;
  messages: Array<string>;
  resultCode: number;
}

export interface IPhotos {
  small: string | null;
  large: string | null;
}
