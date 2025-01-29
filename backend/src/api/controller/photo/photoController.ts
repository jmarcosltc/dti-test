import { Request, Response } from "express";
import multer from "multer";
import { NOT_FOUND, UNKNOWN_SERVER_ERROR } from "../../../utils/controllerConsts";
import * as photoService from "../../service/photo/photoService";
import { createPhoto } from "../../service/photo/photoService";

const upload = multer({ dest: "uploads/" });

export const getPhotosByUserId = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.id;

    const userPhotos = await photoService.getPhotosByAlbumId(userId);

    if (!userPhotos) {
      res.status(404).json({ message: NOT_FOUND });
    }

    res.status(200).json(userPhotos);
  } catch (error) {
    res.status(500).json({ message: UNKNOWN_SERVER_ERROR });
  }
};
export const uploadPhoto = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, albumId } = req.body;
    const file = req.file;

    if (!title || !albumId) {
      res.status(400).json({ message: "Title, albumId, and image are required." });
    }

    if (!file) {
      res.status(400).json({ message: "File is required." });
      return;
    }

    const imageUrl = `/uploads/${file.filename}`;

    const newPhoto = await createPhoto({ title, albumId: Number(albumId), url: imageUrl });
    res.status(201).json(newPhoto);
  } catch (error) {
    res.status(500).json({ message: UNKNOWN_SERVER_ERROR });
  }
};

export const updatePhoto = async (req: Request, res: Response): Promise<void> => {
  try {
    const photoId = Number(req.params.id);
    const { title, albumId } = req.body;
    const file = req.file;

    const existingPhoto = await photoService.getPhotoById(photoId);
    if (!existingPhoto) {
      res.status(404).json({ message: NOT_FOUND });
      return;
    }

    const updatedData: any = { title, albumId: Number(albumId) };

    if (file) {
      updatedData.url = `/uploads/${file.filename}`;
    }

    const updatedPhoto = await photoService.updatePhoto(photoId, updatedData);
    res.status(200).json(updatedPhoto);
  } catch (error) {
    res.status(500).json({ message: UNKNOWN_SERVER_ERROR });
  }
};

export const deletePhoto = async (req: Request, res: Response): Promise<void> => {
  try {
    const photoId = Number(req.params.id);

    const existingPhoto = await photoService.getPhotoById(photoId);

    if (!existingPhoto) {
      res.status(404).json({ message: NOT_FOUND });
    }

    await photoService.deletePhoto(photoId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: UNKNOWN_SERVER_ERROR });
  }
};
