const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

// app.use((req, res, next) => {
//     console.log('In a middleware');
//     res.send('<h1>Hello from express</h1>');
//     next();   //go to next middleware
// });

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);