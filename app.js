const express = require("express");
const path = require("path");
const routes = require("./routes/main");
const app = express();
const PORT = 3001;

const publicFolderPath = path.resolve(__dirname, "./public");
app.use(express.static(publicFolderPath));

app.listen(PORT, () => {
  console.log("Server running in port " + PORT);
});

app.use("/", routes);
