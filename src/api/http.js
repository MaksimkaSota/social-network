import axios from 'axios';

const URL = 'https://social-network.samuraijs.com/api/1.0/';
const KEY = process.env.KEY;

export const http = axios.create({
  withCredentials: true,
  baseURL: URL,
  headers: {
    'API-KEY': KEY
  }
});
