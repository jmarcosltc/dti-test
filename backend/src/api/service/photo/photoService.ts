import { readDB, writeDB } from "../../../dbService";
import { Photo } from "../../../model/photo/Photo";

export const getPhotosByAlbumId = async (albumId: string) => {
  const db = await readDB();

  return db.photos.filter((photo: { albumId: number }) => photo.albumId === Number(albumId));
};

export const getPhotoById = async (id: number): Promise<Photo | null> => {
  const db = await readDB();

  const photo = db.photos.find((photo: { id: number }) => photo.id === id);

  return photo;
};

export const createPhoto = async (photoData: Photo) => {
  const db = await readDB();

  const highestId =
    db.photos.length > 0 ? Math.max(...db.photos.map((p: { id: number }) => p.id)) : 4999;
  const newPhoto: Photo = { ...photoData, id: highestId + 1 };

  db.photos.push(newPhoto);

  await writeDB(db);

  return newPhoto;
};

export const deletePhoto = async (id: number): Promise<boolean> => {
  const db = await readDB();

  db.photos = db.photos.filter((photo: { id: number }) => photo.id !== id);

  await writeDB(db);
  return true;
};

export const updatePhoto = async (id: number, updatedData: Partial<Photo>) => {
  const db = await readDB();
  const index = db.photos.findIndex((photo: { id: number }) => photo.id === id);
  if (index === -1) return null;

  db.photos[index] = { ...db.photos[index], ...updatedData };
  await writeDB(db);
  return db.photos[index];
};
