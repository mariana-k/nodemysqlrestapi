'user strict';
var pool = require('./db.js');

//Product object constructor
var Product = function(product){
    this.product_name = product.product_name;
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
    pool.getConnection(function(err, connection) {
        if(err) { 
          console.log(err); 
          callback(true); 
          return; 
        }
        connection.query("select * from j4qt8_hikashop_product", function (err, res) {
            connection.release(); // always put connection back in pool after last query
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('products : ', res);  

                 result(null, res);
                }
            });   
    });
};

Product.createProduct = function createProduct(newProduct, result) {    
    pool.getConnection(function(err, connection) {
        if(err) { 
          console.log(err); 
          callback(true); 
          return; 
        }
    connection.query("INSERT INTO j4qt8_hikashop_product set ?", newProduct, function (err, res) {
        connection.release(); 
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });        
    });   
};

Product.getProductById = function createProduct(productId, result) {
    pool.getConnection(function(err, connection) {
        if(err) { 
          console.log(err); 
          callback(true); 
          return; 
        }
    connection.query("Select product_name from j4qt8_hikashop_product where product_id = ? ", productId, function (err, res) {             
        connection.release();    
        if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });  
    });
    };
Product.updateById = function(id, product, result){
    pool.getConnection(function(err, connection) {
        if(err) { 
          console.log(err); 
          callback(true); 
          return; 
        }
    connection.query("UPDATE j4qt8_hikashop_product SET product_name = ? WHERE product_id = ?", [product.product_name, id], function (err, res) {
        connection.release();    
        if(err) {
                console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
                  }
              }); 
            });
  };

Order.getAllOrders = function getAllOrders(result) {
    pool.getConnection(function(err, connection) {
        if(err) { 
          console.log(err); 
          callback(true); 
          return; 
        }
    connection.query("select * from j4qt8_hikashop_order", function (err, res) {
        connection.release(); 
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('orders : ', res);  

             result(null, res);
            }
        }); 
    });  
};

User.getAllUsers = function getAllUsers(result) {
    pool.getConnection(function(err, connection) {
        if(err) { 
          console.log(err); 
          callback(true); 
          return; 
        }
    connection.query("select * from j4qt8_hikashop_user", function (err, res) {
        connection.release(); 
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('users : ', res);  

             result(null, res);
            }
        });   
    });
    };


Vote.getAllVotes = function getAllVotes(result) {
    pool.getConnection(function(err, connection) {
        if(err) { 
          console.log(err); 
          callback(true); 
          return; 
        }
    connection.query("select * from j4qt8_hikashop_vote", function (err, res) {
        connection.release(); 
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('votes : ', res);  

             result(null, res);
            }
        });   
    });
};

Category.getAllCategories = function getAllCategories(result) {
    pool.getConnection(function(err, connection) {
        if(err) { 
          console.log(err); 
          callback(true); 
          return; 
        }
    connection.query("select * from j4qt8_hikashop_category", function (err, res) {
        connection.release(); 
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('category : ', res);  

             result(null, res);
            }
        });  
    }); 
};
module.exports= {
    Product,
    Order,
    User,
    Vote,
    Category
};