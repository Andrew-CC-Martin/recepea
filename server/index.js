const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.get("/hello", (req, res) => {
  res.send("Hello again, world!");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
