import { http } from './http';

export const getProfileAPI = async (id) => {
  const response = await http.get(`profile/${id}`);
  return response.data;
};

export const getStatusAPI = async (id) => {
  const response = await http.get(`profile/status/${id}`);
  return response.data;
};

export const updateStatusAPI = async (status) => {
  const response = await http.put(`profile/status`, { status });
  return response.data;
};

export const updatePhotoAPI = async (photo) => {
  const formData = new FormData();
  formData.append('image', photo);
  const response = await http.put(`profile/photo`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const updateProfileAPI = async (profile) => {
  const response = await http.put(`profile`, profile);
  return response.data;
};
