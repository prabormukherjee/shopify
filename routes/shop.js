const express = require('express');

const Router = express.Router();

Router.get('/', (req, res, next) => {
    console.log('In 1st middleware');
    res.send('<h1>Hello From Express</h1>');
});

module.exports =  Router;