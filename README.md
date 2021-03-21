# node106

Next part of application.  

Added dynamic `templating engine(ejs)` in place of `handlebars` the `views` folder.  

+ `Shop` for main `home` page  
+ `add-product` for `adding product`  
+ `404` for `Page Not Found`  
+ `head`, `end`, `navigation` for common parts from all pages(in `/includes`)  

Desc:  
`app.js` is the main driver code.  
all `routes` related logic is in the `routes` folder(`shop.js`, `admin.js`)  
all `ejs` codes in the `views` folder(`404.ejs`, `add-product.ejs`, `shop.ejs`)  
all `css` codes in `public/css` folder(`main.css`, `product.css`, `forms.css`)

To run:  
`npm i` or `npm install`  
`npm start` or `nodemon app.js` or `node app.js`  
