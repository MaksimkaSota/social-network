import { http } from './http';
import { IPhotoData, IRequestProfile, IResponseProfile, UrlString } from './types/profile';
import { IResponse } from './types/http';

export const getProfileAPI = async (id: number): Promise<IResponseProfile> => {
  const response = await http.get(UrlString.profile + id);
  return response.data;
};

export const getStatusAPI = async (id: number): Promise<string> => {
  const response = await http.get(UrlString.status + id);
  return response.data;
};

export const updateStatusAPI = async (status: string): Promise<IResponse> => {
  const response = await http.put(UrlString.status, { status });
  return response.data;
};

export const updatePhotoAPI = async (photo: File): Promise<IResponse<IPhotoData>> => {
  const formData: FormData = new FormData();
  formData.append('image', photo);
  const response = await http.put(UrlString.photo, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const updateProfileAPI = async (profile: IRequestProfile): Promise<IResponse> => {
  const response = await http.put(UrlString.profile, profile);
  return response.data;
};
