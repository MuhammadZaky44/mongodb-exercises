var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create schema produsen disini
var ProdusenSchema = new Schema({
   /* Masukkin schema kalian disini yak */
   produsenID: String,
   productID: String,
   companyName: String,
   produsenLocation: String,
});

module.exports = mongoose.model('Produsen', ProdusenSchema);
