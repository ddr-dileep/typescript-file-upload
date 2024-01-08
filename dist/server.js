"use strict";
// import express from "express";
// import fileRoutes from "./routes/fileRoutes";
// import { errorHandler } from "./utils/errorHandler";
// import cors from 'cors'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// const PORT = process.env.PORT || 3000;
// app.use(cors());
// app.use(express.json());
// app.use("/api/files", fileRoutes);
// app.use(errorHandler);
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express_1 = __importDefault(require("express"));
const fileRoutes_1 = __importDefault(require("./routes/fileRoutes"));
const errorHandler_1 = require("./utils/errorHandler");
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_session_1 = __importDefault(require("express-session"));
require("dotenv/config");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SESSION_SECRET || '';
app.use((0, helmet_1.default)());
const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use((0, express_session_1.default)({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true,
}));
app.use("/api/files", fileRoutes_1.default);
app.use(errorHandler_1.errorHandler);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
