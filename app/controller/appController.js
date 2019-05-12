'use strict';

var Product = require('../model/appModel.js');

exports.list_all_products = function(req, res) {
  Product.getAllProduct(function(err, product) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', product);
    res.send(product);
  });
};
