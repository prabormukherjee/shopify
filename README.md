# node104

Next part of application.  

Added dynamic `templating engine(pug)` in place of `html` the `views` folder.  

+ `Shop` for main `home` page  
+ `add-product` for `adding product`  
+ `404` for `Page Not Found`  
+ `main-layout` for common parts from all pages(in `/layouts`)  

Added styling in the `public/css`

+ updates all previous stylings  
+ `forms` for form(html) styling  

Desc:
`app.js` is the main driver code.  
all routes related logic is in the `routes` folder(`shop.js`, `admin.js`)  
all `pug` codes in the `views` folder(`404.pug`, `add-product.pug`, `shop.pug`)
all css codes in `public/css` folder(`main.css`, `product.css`, `forms.css`)

To run:  
`npm i` or `npm install`  
`npm start` or `nodemon app.js` or `node app.js`
