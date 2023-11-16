const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;
//Routes
const routesMain = require("./routes/main");
const routesProducts = require("./routes/products");
const userRoutes = require("./routes/user");

const publicFolderPath = path.resolve(__dirname, "../public");
app.use(express.static(publicFolderPath));

app.listen(PORT, () => {
  console.log("Server running in port " + PORT);
});

app.use("/users", userRoutes);
app.use("/", routesMain);
//app.use("/products", routesProducts);
