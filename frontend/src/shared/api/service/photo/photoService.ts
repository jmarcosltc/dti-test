import { deletePhotoRepository, getPhotosRepository, updatePhotoRepository, uploadPhotoRepository } from "../../repository/photo/photoRepository";
import { Photo } from "../../types/Photo";

export const getPhotosService = async (id: string): Promise<Photo[]> => {
    return getPhotosRepository(id);
};

export const uploadPhotoService = async (formData: FormData) => {
    return uploadPhotoRepository(formData);
};

export const deletePhotoService = async (photoId: number) => {
    return deletePhotoRepository(photoId);
};

export const updatePhotoService = async ({photoId, updatedData}) => {
    return updatePhotoRepository(photoId, updatedData);
};