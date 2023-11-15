const productController = {
  index: (req, res) => {
    res.status(200).send("Listado de productos");
  },
};

module.exports = productController;
