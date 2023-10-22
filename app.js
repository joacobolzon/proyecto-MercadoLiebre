const express = require("express");
const path = require("path");

const app = express();
const PORT = 3001;

app.listen(PORT, () => {
  console.log("Server running in port " + PORT);
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
