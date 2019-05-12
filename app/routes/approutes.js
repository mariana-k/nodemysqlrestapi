'use strict';
module.exports = function(app) {
  var productList = require('../controller/appController');

  // productList Routes
  app.route('/products')
    .get(productList.list_all_products);
   

    };