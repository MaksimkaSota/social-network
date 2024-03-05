import { http } from './http';
import { UrlSubString } from '../utils/types/enums';
import { IResponse, IUsers } from '../utils/types/api';

export const getUsersAPI = async (page: number, pageSize: number): Promise<IUsers> => {
  const response = await http.get(`users?page=${page}&count=${pageSize}`);
  return response.data;
};

export const followAPI = async (id: number): Promise<IResponse> => {
  const response = await http.post(UrlSubString.follow + id);
  return response.data;
};

export const unfollowAPI = async (id: number): Promise<IResponse> => {
  const response = await http.delete(UrlSubString.follow + id);
  return response.data;
};
