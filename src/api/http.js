import axios from 'axios';

const URL = 'https://social-network.samuraijs.com/api/1.0/';
const KEY = 'eeef07f4-5659-4447-a94e-52a1e5f5b9ba';

export const http = axios.create({
  withCredentials: true,
  baseURL: URL,
  headers: {
    'API-KEY': KEY
  }
});
