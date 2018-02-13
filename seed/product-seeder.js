var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: '',
        title: 'Digibyte-backPack',
        description: 'A bag to put stuff and thing in.',
        price: 2000
    }),
    new Product({
        imagePath: '',
        title: 'Digibyte-Grab-Bag',
        description: 'A Mystery brown bag',
        price: 10000
    }),
    new Product({
        imagePath: '',
        title: 'Digibyte-Challange',
        description: 'Find the clues unlock the sum of the Black-Label Wallet.',
        price: 1
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}