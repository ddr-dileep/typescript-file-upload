import { Request, Response } from "express";
import { uploadFile, getUploadedFiles } from "../models/fileModel";
import fs from "fs"
export const uploadFileController = async (
  req: Request|any,
  res: Response
): Promise<void> => {
  try {

    const result = await uploadFile(req?.file);

    res.status(200).json({ message: "File uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUploadedFilesController = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const files = await getUploadedFiles();

    const convertToBase64 = async (file:any) => {
      const buffer = await fs.promises.readFile(file.path);
      const base64Data = buffer.toString('base64');
      return { ...file, base64Data };
    };

    const filesWithBase64 = await Promise.all(files.map(convertToBase64));
    res.status(200).json({ files: filesWithBase64 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
