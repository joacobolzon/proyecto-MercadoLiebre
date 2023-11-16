const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;
//Routes
const routesMain = require("./routes/main");
const routesProducts = require("./routes/products");
const usersRoutes = require("./routes/users");

const publicFolderPath = path.resolve(__dirname, "../public");
app.use(express.static(publicFolderPath));

app.listen(PORT, () => {
  console.log("Server running in port " + PORT);
});

app.use("/users", usersRoutes);
app.use("/", routesMain);
//app.use("/products", routesProducts);
