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
   var product = new Product();
   product.productID = req.body.productID;
   product.productName = req.body.productName;
   product.productDesc = req.body.productDesc;
   product.productRating = req.body.productRating;

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
   if (req.query.id) {
      const id = req.query.id;

      Product.findById(id)
      .then((data) => {
         if (!data) {
            res.status(404).send ({
               message: `User dengan id ${id} tidak ketemu. `,
            });
         } else {
            res.send(data);
         }
      })
      .catch((err) => {
         res.status(500).send ({
            message: 'Terjadi error pada update user information.',
         });
      });
   } else {
      Product.find()
         .then((data) => {
            res.send(data);
         })
         .catch((err) => {
            res.status(500).send({ message: err.message });
         });
   }
};

exports.update = (req, res) => {
   //validasi apakah req body ada atau tidak
   if (!req.body) {
      return res.status(400).send({ message: 'Ga boleh kosong.' });
   }

   //ambil params idnya
   const id = req.params.id;

   //gunakan method findByIdAndUpdate ditentukan dari id dan req bodynya.
   // clue NamaModel.findByIdAndUpdate()
   Product.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
   })
      .then((data) => {
         if (!data) {
            res.status(404).send ({
               message: `User dengan id ${id} tidak ketemu. `,
            });
         } else {
            res.send(data);
         }
      })
      .catch((err) => {
         res.status(500).send ({
            message: 'Terjadi error pada update user information.',
         });
      });
};

exports.delete = (req, res) => {
   //request paramsnya
   const id = req.params.id;

   //findByID and Delete dari product
   // NamaModel.findByIdAndDelete
   Product.findByIdAndDelete(id)
      .then((data) => {
         if (!data) {
            res.status(400).send ({
               message: `Ada yang salah dengan ${id}. `,
            });
         } else {
            res.send({
               message: 'Sudah didelete.'
            });
         }
      })
      .catch((err) => {
         res.status(500).send ({
            message: `Terdapat kesalahan pada ${id}.`,
         });
      });
};
