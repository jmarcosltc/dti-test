import { Request, Response } from "express";
import { NOT_FOUND, UNKNOWN_SERVER_ERROR } from "../../../utils/controllerConsts";
import * as albumService from "../../service/album/albumService";

export const getAlbumsByUserId = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.params.id;

        const userAlbum = await albumService.getAlbumsByUserId(userId);

        if (!userAlbum) {
            res.status(404).json({ message: NOT_FOUND });
        }

        res.status(200).json(userAlbum);
    } catch (error) {
        res.status(500).json({ message: UNKNOWN_SERVER_ERROR });
    }
}

export const getAlbumsById = async (req: Request, res: Response): Promise<void> => {
    try {
        const albumId = Number(req.params.id);

        const album = await albumService.getAlbumById(albumId);

        if (!album) {
            res.status(404).json({ message: NOT_FOUND });
        }

        res.status(200).json(album);
    } catch (error) {
        res.status(500).json({ message: UNKNOWN_SERVER_ERROR });
    }
}

export const createAlbum = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, userId } = req.body;
        
        if (!title || !userId) {
            res.status(400).json({ message: "Title and userId are required." });
        }

        const newAlbum = await albumService.createAlbum({ title, userId });
        res.status(201).json(newAlbum);
    } catch (error) {
        res.status(500).json({ message: UNKNOWN_SERVER_ERROR });
    }
};

export const updateAlbum = async (req: Request, res: Response): Promise<void> => {
    try {
        const albumId = Number(req.params.id);
        const updatedData = req.body;

        const existingAlbum = await albumService.getAlbumById(albumId);
        if (!existingAlbum) {
            res.status(404).json({ message: NOT_FOUND });
        }

        const updatedAlbum = await albumService.updateAlbum(albumId, updatedData);
        res.status(200).json(updatedAlbum);
    } catch (error) {
        res.status(500).json({ message: UNKNOWN_SERVER_ERROR });
    }
};

export const deleteAlbum = async (req: Request, res: Response): Promise<void> => {
    try {
        const albumId = Number(req.params.id);

        const existingAlbum = await albumService.getAlbumById(albumId);

        if (!existingAlbum) {
            res.status(404).json({ message: NOT_FOUND });
        }

        await albumService.deleteAlbum(albumId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: UNKNOWN_SERVER_ERROR });
    }
};

export const getPhotosByAlbumId = async (req: Request, res: Response): Promise<void> => {
    try {
        const albumId = req.params.id;

        const albumPhotos = await albumService.getPhotosByAlbumId(albumId);

        if (!albumPhotos) {
            res.status(404).json({ message: NOT_FOUND });
        }

        res.status(200).json(albumPhotos);
    } catch (error) {
        res.status(500).json({ message: UNKNOWN_SERVER_ERROR });
    }
}