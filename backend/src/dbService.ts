import axios from "axios";
import jsonfile from "jsonfile";
import path from "path";

const DB_PATH = path.join(__dirname, "../db.json");

const JP_API_URL = process.env.JP_API_URL;

export const readDB = async (): Promise<any> => {
  return jsonfile.readFile(DB_PATH);
};

export const writeDB = async (data: any): Promise<void> => {
  return jsonfile.writeFile(DB_PATH, data, { spaces: 2 });
};

export const syncAlbumsWithAPI = async (): Promise<void> => {
  try {
    const res = await axios.get(`${JP_API_URL}/albums`);
    const apiAlbums = res.data;

    const db = await readDB();
    db.albums = apiAlbums;
    await writeDB(db);
  } catch (error) {
    console.error("Error getting albums from API:", error);
  }
};

export const syncPhotosWithAPI = async (): Promise<void> => {
  try {
    const res = await axios.get(`${JP_API_URL}/photos`);
    const apiPhotos = res.data;

    const db = await readDB();
    db.photos = apiPhotos;
    await writeDB(db);
  } catch (error) {
    console.error("Error getting photos from API:", error);
  }
};
