// Import Modul Produsen
var Produsen = require('../models/produsen');

// Create Produsen
exports.create = (req, res) => {
   // validasi apakah body ada atau tidak
   console.log(req.body);
   if (!req.body) {
      res.status(400).send({
         message: 'Beberapa content tidak boleh kosong loh',
      });
      return;
   }

   // new Produsen Silahkan disini dari baris 16-dst
   var produsen = new Produsen();
   produsen.produsenID = req.body.produsenID;
   produsen.productID = req.body.productID;
   produsen.companyName = req.body.companyName;
   produsen.produsenLocation = req.body.produsenLocation;

   // save ke DB
   try {
      produsen.save().then((data) => {
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

      Produsen.findById(id)
         .then((data) => {
            if (!data) {
               res.status(404).send({
                  message: `User dengan id ${id} tidak ketemu. `,
               });
            } else {
               res.send(data);
            }
         })
         .catch((err) => {
            res.status(500).send({
               message: 'Terjadi error pada update user information.',
            });
         });
   } else {
      Produsen.find()
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
   Produsen.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
   })
      .then((data) => {
         if (!data) {
            res.status(404).send({
               message: `User dengan id ${id} tidak ketemu. `,
            });
         } else {
            res.send(data);
         }
      })
      .catch((err) => {
         res.status(500).send({
            message: 'Terjadi error pada update user information.',
         });
      });
};

exports.delete = (req, res) => {
   //request paramsnya
   const id = req.params.id;

   //findByID and Delete dari product
   // NamaModel.findByIdAndDelete
   Produsen.findByIdAndDelete(id)
      .then((data) => {
         if (!data) {
            res.status(400).send({
               message: `Ada yang salah dengan ${id}. `,
            });
         } else {
            res.send({
               message: 'Sudah didelete.'
            });
         }
      })
      .catch((err) => {
         res.status(500).send({
            message: `Terdapat kesalahan pada ${id}.`,
         });
      });
};
