import { readDB, writeDB } from "../../../dbService";
import { Album } from "../../../model/album/Album";

export const getAlbumsByUserId = async (userId: string): Promise<Album[]> => {
  const db = await readDB();
  return db.albums.filter((album: { userId: number }) => album.userId === Number(userId));
};

export const getAlbumById = async (id: number): Promise<Album | null> => {
  const db = await readDB();

  const album = db.albums.find((album: { id: number }) => album.id === id);

  if (!album || db.deletedAlbums.includes(id)) {
    return null;
  }

  return album;
};

export const createAlbum = async (albumData: Album) => {
  const db = await readDB();
  const newAlbum: Album = { ...albumData, id: db.albums.length + 100 };
  db.albums.push(newAlbum);
  await writeDB(db);
  return newAlbum;
};

export const deleteAlbum = async (id: number): Promise<boolean> => {
  const db = await readDB();

  db.albums = db.albums.filter((album: { id: number }) => album.id !== id);

  await writeDB(db);
  return true;
};

export const updateAlbum = async (id: number, updatedData: Partial<Album>) => {
  const db = await readDB();
  const index = db.albums.findIndex((album: { id: number }) => album.id === id);
  if (index === -1) return null;

  db.albums[index] = { ...db.albums[index], ...updatedData };
  await writeDB(db);
  return db.albums[index];
};

export const getPhotosByAlbumId = async (albumId: string) => {
  const db = await readDB();

  return db.photos.filter((photo: { albumId: number }) => photo.albumId === Number(albumId));
};
