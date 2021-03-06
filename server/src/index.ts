import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import dotenv from "dotenv";

import usersRouter from "./routes/users";
import ingredientsRouter from "./routes/ingredients";
// import userIngredientsRouter from "./routes/userIngredients";

// initialize configuration - dotenv is used to load environment variables from a .env file
dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://warm-frangollo-0dc699.netlify.app",
];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

// Security (helmet recommended in express docs)
if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}

app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/**
 * Everything else in this file is boilerplate/config
 * This is where the magic happens
 */
app.use("/users", usersRouter);
app.use("/ingredients", ingredientsRouter);
// todo
// app.use("/pantry-items", userIngredientsRouter);

const port = process.env.PORT || 4000;

app.get("/", (_req, res) => {
  res.send("Recepea app!");
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
