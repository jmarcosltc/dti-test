import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { syncAlbumsWithAPI, syncPhotosWithAPI } from "./dbService";
import routes from "./routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(
  "/uploads",
  (req, res, next) => {
    console.log("Serving image:", req.path); // ✅ Debug what path is being requested
    next();
  },
  express.static(path.join(__dirname, "../uploads")),
);

syncAlbumsWithAPI();
syncPhotosWithAPI();

app.use("/api", routes);

const PORT = process.env.PORT || 3080;
app.listen(PORT, () => console.log(`LISTENING ON: ${PORT}`));
