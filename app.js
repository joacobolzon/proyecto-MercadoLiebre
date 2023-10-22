const express = require("express");
const patch = require("path");

const app = express();

app.listen(3001, () => {
  console.log("Server running");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
