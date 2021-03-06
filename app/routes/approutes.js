'use strict';
module.exports = function(app) {
  var appController = require('../controller/appController');

  // productList Routes
  app.route('/products')
    .get(appController.list_all_products).post(appController.create_a_product);

    app.route('/products/:productId')
    .get(appController.read_a_product)
    .put(appController.update_a_product);
    

    // orderList Routes
  app.route('/orders')
  .get(appController.list_all_orders);
   
    // userList Routes
    app.route('/users')
    .get(appController.list_all_users);

    app.route('/users/:userId')
    .get(appController.read_a_user)
    .put(appController.update_a_user);

     // voteList Routes
     app.route('/votes')
     .get(appController.list_all_votes);


     app.route('/votes/:voteId')
    .get(appController.read_a_vote)
    .put(appController.update_a_vote);

      // categoryList Routes
    app.route('/categories')
    .get(appController.list_all_categories);

    };


   

