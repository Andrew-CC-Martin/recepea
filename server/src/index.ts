import express from "express";
import cors from "cors";
const app = express();
const allowedOrigins = [
  "http://localhost:3000",
  "https://warm-frangollo-0dc699.netlify.app/",
];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors(options));
const port = 4000; // default port to listen

// define a route handler for the default home page
app.get("/hello", (req, res) => {
  res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
