import { httpClient } from "../../core/axios/axios";
import { Photo } from "../../types/Photo";

export const getPhotosRepository = async (id: string): Promise<Photo[]> => {
  const response = await httpClient.get(`/api/albums/${id}/photos`);
  return response.data;
};

export const uploadPhotoRepository = async (formData: FormData) => {
  const response = await httpClient.post("/api/photos", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const deletePhotoRepository = async (photoId: number) => {
  const response = await httpClient.delete(`/api/photos/${photoId}`);
  return response.data;
};

export const updatePhotoRepository = async (photoId: number, updatedData: Partial<Photo>) => {
  const response = await httpClient.put(`/api/photos/${photoId}`, updatedData);
  return response.data;
};
