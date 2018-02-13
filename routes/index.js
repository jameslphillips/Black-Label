var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport =require('passport');

var Product = require('../models/product');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, docs) {
      var productChunks = [];
      var chunkSize = 3;
      for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('shop/index', { title: 'Digibyte-Black-Label', products: productChunks });
  });
});

router.get('/user/signup', function(req, res, next) {
    var messages = req.flash('error');
  res.render('user/signup', {csrfToken: req.csrfToken(), mmessage: messages});
});

router.post('/user/signup', passport.authenticate('local.signup', {
    succesRedirect: 'user/profile',
    failureRedirect: '/user/singup',
    failureFlash: true
}));

router.get('user/profile', function(req, res, next) {
    res.render('user/profile');
});

module.exports = router;
