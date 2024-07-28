class Product{
    name;
    price;
    qty;

deliver = ( ) => {

};
bill =( ) => {   
    return this.price * this.qty;
}
}
// export the class
module.exports= Product;

