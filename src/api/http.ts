import axios, { AxiosInstance } from 'axios';
import { UrlString } from '../utils/types/enums';

export const http: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: UrlString.social_network,
  headers: {
    'API-KEY': process.env.KEY,
  },
});
