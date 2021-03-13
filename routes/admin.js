const path = require('path');

const express = require('express');

const Router = express.Router();

const rootDir = require('../util/path');

const products = []

//GET => /admin/add-product
Router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'});
});

//POST => /admin/add-product
Router.post('/add-product', (req, res, next) => {
    // console.log(req.body);
    products.push({title: req.body.title})
    res.redirect('/');
});

exports.routes = Router;
exports.products = products;