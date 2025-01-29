import { httpClient } from "../../core/axios/axios";
import { Album } from "../../types/Album";

export const getAlbumsRepository = async (id: string): Promise<Album[]> => {
    const response = await httpClient.get(`/api/albums/user/${id}`);
    return response.data;
};

export const getAlbumByIdRepository = async (id: string): Promise<Album> => {
    const response = await httpClient.get(`/api/albums/${id}`);
    return response.data;
};

export const deleteAlbumRepository = async (albumId: number) => {
    const response = await httpClient.delete(`/api/albums/${albumId}`);
    return response.data;
};

export const updateAlbumRepository = async ({ albumId, title }: { albumId: string; title: string }) => {
    await httpClient.put(`/api/albums/${albumId}`, { title });
};

export const createAlbumRepository = async (albumData: Album) => {
    const response = await httpClient.post("/api/albums", albumData);
    return response.data;
};