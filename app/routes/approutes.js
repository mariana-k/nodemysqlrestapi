'use strict';
module.exports = function(app) {
  var {list_all_orders, list_all_products, create_a_product, list_all_users, list_all_votes, list_all_categories} = require('../controller/appController');

  // productList Routes
  app.route('/products')
    .get(list_all_products).post(create_a_product);

    // orderList Routes
  app.route('/orders')
  .get(list_all_orders);
   
    // userList Routes
    app.route('/users')
    .get(list_all_users);

     // voteList Routes
     app.route('/votes')
     .get(list_all_votes);

      // categoryList Routes
    app.route('/categories')
    .get(list_all_categories);

    };


   

