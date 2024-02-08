import { http } from './http';
import { IUsers, UrlString } from './types/users';
import { IResponse } from './types/http';

export const getUsersAPI = async (page: number, pageSize: number): Promise<IUsers> => {
  const response = await http.get(`users?page=${page}&count=${pageSize}`);
  return response.data;
};

export const followAPI = async (id: number): Promise<IResponse> => {
  const response = await http.post(UrlString.follow + id);
  return response.data;
};

export const unfollowAPI = async (id: number): Promise<IResponse> => {
  const response = await http.delete(UrlString.follow + id);
  return response.data;
};
