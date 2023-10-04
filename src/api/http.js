import axios from 'axios';

export const http = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'eeef07f4-5659-4447-a94e-52a1e5f5b9ba'
  }
});
