export interface IResponse<D = {}> {
  data: D;
  messages: Array<string>;
  resultCode: number;
}
