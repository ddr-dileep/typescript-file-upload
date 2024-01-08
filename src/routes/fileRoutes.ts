import express from "express";
import {
  uploadFileController,
  getUploadedFilesController,
} from "../controllers/fileControllers";
import { fileUploadMiddleware } from "../middlewares.ts/fileUploadMiddleware";

const router = express.Router();

router.post("/upload", fileUploadMiddleware, uploadFileController);

router.get("/list", getUploadedFilesController);

export default router;
