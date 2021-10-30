var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create schema product disini
var ProductSchema = new Schema({
   /* Masukkin schema kalian disini yak */
   productID: Number,
   productName: String,
   productDesc: String,
   productRating: String,
});

module.exports = mongoose.model('Product', ProductSchema);
