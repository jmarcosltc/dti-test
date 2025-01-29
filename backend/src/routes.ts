import express from "express";
import multer from "multer";
import {
  createAlbum,
  deleteAlbum,
  getAlbumsById,
  getAlbumsByUserId,
  getPhotosByAlbumId,
  updateAlbum,
} from "./api/controller/album/albumController";
import {
  deletePhoto,
  getPhotosByUserId,
  updatePhoto,
  uploadPhoto,
} from "./api/controller/photo/photoController";
import { getUserById, getUsers } from "./api/controller/user/userController";

const router = express.Router();

router.use(express.json());

router.get("/albums/user/:id", getAlbumsByUserId);
router.get("/albums/:id", getAlbumsById);
router.post("/albums", createAlbum);
router.put("/albums/:id", updateAlbum);
router.delete("/albums/:id", deleteAlbum);
router.get("/albums/:id/photos", getPhotosByAlbumId);

router.get("/photos/:id", getPhotosByUserId);

const upload = multer({ dest: "uploads/" });

router.post("/photos", upload.single("image"), uploadPhoto);
router.put("/photos/:id", updatePhoto);
router.delete("/photos/:id", deletePhoto);

router.get("/users", getUsers);
router.get("/users/:id", getUserById);

export default router;
