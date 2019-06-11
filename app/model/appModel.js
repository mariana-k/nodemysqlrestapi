'user strict';
var sql = require('./db.js');

//Product object constructor
var Product = function(product){
    this.product = product.product;
    this.status = product.status;
    this.created_at = new Date();
};

//Order object constructor
var Order = function(order){
    this.order = order.order;
    this.status = order.status;
    this.created_at = new Date();
};

//User object constructor
var User = function(user){
    this.user = user.user;
    this.status = user.status;
    this.created_at = new Date();
};


//Vote object constructor
var Vote = function(vote){
    this.vote = vote.vote;
    this.status = vote.status;
    this.created_at = new Date();
};

//Category object constructor
var Category = function(category){
    this.category = category.category;
    this.status = category.status;
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

Product.createProduct = function createProduct(newProduct, result) {    
    sql.query("INSERT INTO j4qt8_hikashop_product set ?", newProduct, function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });           
};

Order.getAllOrders = function getAllOrders(result) {
    sql.query("select * from j4qt8_hikashop_order", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('orders : ', res);  

             result(null, res);
            }
        });   
};

User.getAllUsers = function getAllUsers(result) {
    sql.query("select * from j4qt8_hikashop_user", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('users : ', res);  

             result(null, res);
            }
        });   
};

Vote.getAllVotes = function getAllVotes(result) {
    sql.query("select * from j4qt8_hikashop_vote", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('votes : ', res);  

             result(null, res);
            }
        });   
};

Category.getAllCategories = function getAllCategories(result) {
    sql.query("select * from j4qt8_hikashop_category", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('category : ', res);  

             result(null, res);
            }
        });   
};
module.exports= {
    Product,
    Order,
    User,
    Vote,
    Category
};