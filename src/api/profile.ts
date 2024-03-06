import { http } from './http';
import { HeaderValue, UrlSubString } from '../utils/types/enums';
import type { IPhotoData, IRequestProfile, IResponse, IResponseProfile } from '../utils/types/api';

export const getProfileAPI = async (id: number): Promise<IResponseProfile> => {
  const response = await http.get(UrlSubString.profile + id);
  return response.data;
};

export const getStatusAPI = async (id: number): Promise<string> => {
  const response = await http.get(UrlSubString.status + id);
  return response.data;
};

export const updateStatusAPI = async (status: string): Promise<IResponse> => {
  const response = await http.put(UrlSubString.status, { status });
  return response.data;
};

export const updatePhotoAPI = async (photo: File): Promise<IResponse<IPhotoData>> => {
  const formData: FormData = new FormData();
  formData.append('image', photo);
  const response = await http.put(UrlSubString.photo, formData, {
    headers: {
      'Content-Type': HeaderValue.multipart_form_data,
    },
  });
  return response.data;
};

export const updateProfileAPI = async (profile: IRequestProfile): Promise<IResponse> => {
  const response = await http.put(UrlSubString.profile, profile);
  return response.data;
};
