'user strict';
var pool = require('./db.js');

//Product object constructor
var Product = function(product){
    this.product_name = product.product_name;
    this.product_description = product.product_description;
    this.product_quantity = product.product_quantity;
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
    this.user_email = user.user_email;
    this.user = user.user;
    this.status = user.status;
    this.created_at = new Date();
};


//Vote object constructor
var Vote = function(vote){
    this.vote_comment = vote.vote_comment;
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

Product.getProductById = function getProductById(productId, result) {
    pool.getConnection(function(err, connection) {
        if(err) { 
          console.log(err); 
          callback(true); 
          return; 
        }
    connection.query("Select * from j4qt8_hikashop_product where product_id = ? ", productId, function (err, res) {             
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
    var productName = product.product_name ? '?' : 'product_name';
    var productDescription = product.product_description ? '?' : 'product_description';
    var productQuantity = product.product_quantity ? '?' : 'product_quantity';
    connection.query("UPDATE j4qt8_hikashop_product SET product_name =" +  productName + ", product_description = " + productDescription + ", product_quantity = " + productQuantity + " WHERE product_id = ?", [product.product_name, product.product_description, product.product_quantity, id], function (err, res) {
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


    User.getUserById = function getUserById(userId, result) {
        pool.getConnection(function(err, connection) {
            if(err) { 
              console.log(err); 
              callback(true); 
              return; 
            }
        connection.query("Select * from j4qt8_hikashop_user where user_id = ? ", userId, function (err, res) {             
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
    User.updateById = function(id, user, result){
        pool.getConnection(function(err, connection) {
            if(err) { 
              console.log(err); 
              callback(true); 
              return; 
            }
        var userEmail = user.user_email ? '?' : 'user_email';
        connection.query("UPDATE j4qt8_hikashop_user SET user_email =" +  userEmail + " WHERE user_id = ?", [user.user_email, id], function (err, res) {
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


      Vote.getVoteById = function geVoteById(voteId, result) {
        pool.getConnection(function(err, connection) {
            if(err) { 
              console.log(err); 
              callback(true); 
              return; 
            }
        connection.query("Select * from j4qt8_hikashop_vote where vote_id = ? ", voteId, function (err, res) {             
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
    Vote.updateById = function(id, vote, result){
        pool.getConnection(function(err, connection) {
            if(err) { 
              console.log(err); 
              callback(true); 
              return; 
            }
        var voteComment = vote.vote_comment ? '?' : 'vote_comment';
        connection.query("UPDATE j4qt8_hikashop_vote SET vote_comment =" +  voteComment + " WHERE vote_id = ?", [vote.vote_comment, id], function (err, res) {
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