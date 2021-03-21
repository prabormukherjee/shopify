const path = require("path");

const express = require("express");

const adminData = require("./admin");
const rootDir = require("../util/path");

const Router = express.Router();

Router.get("/", (req, res, next) => {
  // console.log(adminData.products);
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = Router;
