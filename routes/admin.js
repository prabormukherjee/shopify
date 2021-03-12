const path = require('path');

const express = require('express');

const Router = express.Router();

const rootDir = require('../util/path');

//GET => /admin/add-product
Router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

//POST => /admin/add-product
Router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports =  Router;