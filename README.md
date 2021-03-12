# node103

Next part of application.  
Added static `html` pages in the `views` folder.  

+ `Shop` for main `home` page  
+ `add-product` for `adding product`  
+ `404` for `Page Not Found`  

Added styling in the `public/css`  

+ `main` for overall styling  
+ `product` for product form  

Added `path` file in `utils/path.js`, it will provide the path from where it is called.  

Desc:  
 `app.js` is the main driver code.  
all routes related logic is in the `routes` folder(`shop.js`, `admin.js`)  
all static `html` codes in the `views` folder(`404.html`, `add-product.html`, `shop.html`)  
all `css` codes in `public/css` folder(`main.css`, `product.css`)  

To run:  
`npm i` or `npm install`  
`npm start` (edit `package.json`) or `nodemon app.js` or `node app.js`
