const path = require('path');

const express = require('express');

const adminData = require('./admin');
const rootDir = require('../util/path');

const Router = express.Router();


Router.get('/', (req, res, next) => {
    // console.log(adminData.products);
    const products = adminData.products
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    // res.render('shop');   //look for .pug as it is set in the app.js
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
});

module.exports =  Router;