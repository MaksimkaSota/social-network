import type { AxiosInstance } from 'axios';
import axios from 'axios';
import { RequestString } from '../../utils/types/enums';

export const http: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: RequestString.samurai_js_http,
  headers: {
    'API-KEY': process.env.REACT_APP_KEY,
  },
});
