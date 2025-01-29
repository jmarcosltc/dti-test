import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { syncAlbumsWithAPI, syncPhotosWithAPI } from "./dbService";
import routes from "./routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

syncAlbumsWithAPI();
syncPhotosWithAPI();

app.use("/api", routes);

const PORT = process.env.PORT || 3080;
app.listen(PORT, () => console.log(`LISTENING ON: ${PORT}`));