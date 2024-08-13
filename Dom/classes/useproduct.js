// import Product from` ./product`; ES6
const Product = require (`./Product`) //ES5

// create a new instance of product
const p1 = new Product  ( ); // p1 referce variable
p1.name = "Product 1";
p1.name = 100;
p1.qty = 1;
const bill = p1.bill( );

 const p2 = new Product( );
p2.name = "watch"
p2.price = 200;
p2.qty = 1;
console.log(p2.bill());

console.log(bill);