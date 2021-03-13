# node105

Next part of application.  

Added dynamic `templating engine(handlebars)` in place of `pug` the `views` folder.  

+ `Shop` for main `home` page  
+ `add-product` for `adding product`  
+ `404` for `Page Not Found`  
+ `main-layout` for common parts from all pages(in `/layouts`)  

Desc:  
`app.js` is the main driver code.  
all `routes` related logic is in the `routes` folder(`shop.js`, `admin.js`)  
all `handlebars` codes in the `views` folder(`404.hbs`, `add-product.hbs`, `shop.hbs`)  
all `css` codes in `public/css` folder(`main.css`, `product.css`, `forms.css`)

To run:  
`npm i` or `npm install`  
`npm start` or `nodemon app.js` or `node app.js`  
