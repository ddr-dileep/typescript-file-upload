// import express from "express";
// import fileRoutes from "./routes/fileRoutes";
// import { errorHandler } from "./utils/errorHandler";
// import cors from 'cors'

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// app.use("/api/files", fileRoutes);

// app.use(errorHandler);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

import express from "express";
import fileRoutes from "./routes/fileRoutes";
import { errorHandler } from "./utils/errorHandler";
import cors from "cors";
import helmet from "helmet";
import session from "express-session";
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SESSION_SECRET || '';

app.use(helmet());
const corsOptions = {
  origin: "http://localhost:34701",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors());

app.use(express.json());

app.use(
  session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/api/files", fileRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
