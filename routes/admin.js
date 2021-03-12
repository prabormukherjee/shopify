const express = require('express');

const Router = express.Router();

Router.get('/add-product', (req, res, next) => {
    console.log('In 2nd middleware');
    res.send('<h1>Add Product Page</h1>');
});

Router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports =  Router;