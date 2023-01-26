const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { products, categories } = require("./data");

app.use(bodyParser.json());

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/categories", (req, res) => {
  res.json(categories);
});

app.get("/api/products/category/:name", (req, res) => {
  const name = req.params.name;
  const productsByCategory = products.filter(
    (product) => product.category === name
  );
  res.json(productsByCategory);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
