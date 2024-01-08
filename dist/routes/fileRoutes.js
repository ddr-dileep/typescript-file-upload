"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fileControllers_1 = require("../controllers/fileControllers");
const fileUploadMiddleware_1 = require("../middlewares.ts/fileUploadMiddleware");
const router = express_1.default.Router();
router.post("/upload", fileUploadMiddleware_1.fileUploadMiddleware, fileControllers_1.uploadFileController);
router.get("/list", fileControllers_1.getUploadedFilesController);
exports.default = router;
