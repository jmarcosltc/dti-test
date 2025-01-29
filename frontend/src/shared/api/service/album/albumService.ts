import { createAlbumRepository, deleteAlbumRepository, getAlbumByIdRepository, getAlbumsRepository, updateAlbumRepository } from "../../repository/album/albumRepository";
import { Album } from "../../types/Album";

export const getAlbumsService = async (id: string): Promise<Album[]> => {
    return getAlbumsRepository(id);
};

export const getAlbumByIdService = async (id: string): Promise<Album> => {
    return getAlbumByIdRepository(id);
};

export const deleteAlbumService = async (albumId: number) => {
    return deleteAlbumRepository(albumId);
};

export const updateAlbumService = async ({ albumId, title }: { albumId: string; title: string }) => {
    return updateAlbumRepository({ albumId, title });
};

export const createAlbumService = async (albumData: Album) => {
    return createAlbumRepository(albumData);
};