'use strict';

var {Product, Order, User, Vote, Category} = require('../model/appModel.js');

var list_all_products = function(req, res) {
  
  Product.getAllProduct(function(err, product) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', product);
    res.send(product);
  });
};

var create_a_product = function(req, res) {
  var new_product = new Product(req.body);
console.log(req.body)
  //handles null error 
   if(!new_product.product || !new_product.status){

            res.status(400).send({ error:true, message: 'Please provide product/status' });

        }
else{
  
  Product.createProduct(new_product, function(err, product) {
    
    if (err)
      res.send(err);
    res.json(product);
  });
}
};

var read_a_product = function(req, res) {
  Product.getProductById(req.params.productId, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

var update_a_product = function(req, res) {
  Product.updateById(req.params.productId, new Product(req.body), function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};
var read_a_user = function(req, res) {
  User.getUserById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

var update_a_user = function(req, res) {
  User.updateById(req.params.userId, new User(req.body), function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};
var list_all_orders = function(req, res) {
  Order.getAllOrders(function(err, order) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', order);
    res.send(order);
  });
};

var list_all_users = function(req, res) {
  User.getAllUsers(function(err, user) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', user);
    res.send(user);
  });
};

var list_all_votes = function(req, res) {
  Vote.getAllVotes(function(err, vote) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', vote);
    res.send(vote);
  });
};

var read_a_vote = function(req, res) {
  Vote.getVoteById(req.params.voteId, function(err, vote) {
    if (err)
      res.send(err);
    res.json(vote);
  });
};

var update_a_vote = function(req, res) {
  Vote.updateById(req.params.voteId, new Vote(req.body), function(err, vote) {
    if (err)
      res.send(err);
    res.json(vote);
  });
};

var list_all_categories = function(req, res) {
  Category.getAllCategories(function(err, category) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', category);
    res.send(category);
  });
};

module.exports= {
  list_all_products,
  list_all_orders,
  list_all_users,
  list_all_votes,
  list_all_categories,
  create_a_product,
  update_a_product,
  read_a_product,
  update_a_user,
  read_a_user,
  update_a_vote,
  read_a_vote
};