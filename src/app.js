const express = require("express");
const methodOverride = require("method-override");
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

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));

app.use("/users", usersRoutes);
app.use("/", routesMain);

app.use((req,res,next) => {
  res.status(404).render('error')
})
//app.use("/products", routesProducts);
