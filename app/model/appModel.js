'user strict';
var sql = require('./db.js');

//Product object constructor
var Product = function(product){
    this.product = product.product;
    this.status = product.status;
    this.created_at = new Date();
};

Product.getAllProduct = function getAllProduct(result) {
        sql.query("select * from j4qt8_hikashop_product", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('products : ', res);  

                 result(null, res);
                }
            });   
};

module.exports= Product;