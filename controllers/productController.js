// Import Modul Product
var Product = require('../models/product');

// Create Product
exports.create = (req, res) => {
   // validasi apakah body ada atau tidak
   console.log(req.body);
   if (!req.body) {
      res.status(400).send({
         message: 'Beberapa content tidak boleh kosong loh',
      });
      return;
   }

   // new Product Silahkan disini dari baris 16-dst

   // save ke DB
   try {
      product.save().then((data) => {
         res.send(data);
         //res.redirect('/');
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Ada error di programmu' });
   }
};

exports.fetch = (req, res) => {
   //buat fungsi untuk ngambil data, clue : NamaModels.find()
};

exports.update = (req, res) => {
   //validasi apakah req body ada atau tidak
   if (!req.body) {
      return res.status(400).send({ message: 'Ga boleh kosong' });
   }

   //ambil params idnya
   const id = req./* disiini isi apa? */.id;

   //gunakan method findByIdAndUpdate ditentukan dari id dan req bodynya.
   // clue NamaModel.findByIdAndUpdate()
   
};

exports.delete = (req, res) => {
   //request paramsnya
   const id = req./* disiini isi apa? */.id;

   //findByID and Delete dari product
   // NamaModel.findByIdAndDelete
   
};
