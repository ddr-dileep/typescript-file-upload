"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUploadedFilesController = exports.uploadFileController = void 0;
const fileModel_1 = require("../models/fileModel");
const fs_1 = __importDefault(require("fs"));
const uploadFileController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, fileModel_1.uploadFile)(req === null || req === void 0 ? void 0 : req.file);
        res.status(200).json({ message: "File uploaded successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.uploadFileController = uploadFileController;
const getUploadedFilesController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const files = yield (0, fileModel_1.getUploadedFiles)();
        const convertToBase64 = (file) => __awaiter(void 0, void 0, void 0, function* () {
            const buffer = yield fs_1.default.promises.readFile(file.path);
            const base64Data = buffer.toString('base64');
            return Object.assign(Object.assign({}, file), { base64Data });
        });
        const filesWithBase64 = yield Promise.all(files.map(convertToBase64));
        res.status(200).json({ files: filesWithBase64 });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getUploadedFilesController = getUploadedFilesController;
