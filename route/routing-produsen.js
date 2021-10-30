//kita membutuhkan module router untuk membagi router
var router = require('express').Router();
const { response } = require('express');

//import controller produsen
const produsenController = require('../controllers/produsenController');

//import models produsen.
const produsen = require('../models/produsen');

//import axios untuk membantu di server
const axios = require('axios');

/**
 * 
 *  @description Disini kita buat route untuk endpoint dari frontEndnya.
 *  @method GET /
 *  @description Selalu cek dan sesuain sama file di index js yah, jng lupa npm install nya di lakuin sesuai dependencies yang ada di packget json
 */

router.get('/', function (req, res) {
   axios
      .get('http://localhost:3000/api/produsen')
      .then(function (response) {
         console.log(response.data);
         res.render('index', { produsen: response.data });
      })
      .catch((err) => {
         res.send(err);
      });
});

router.get('/add-produsen', (req, res) => {
   res.render('routing-produsen/add-produsen');
});

router.get('/update-produsen', (req, res) => {
   axios
      .get('http://localhost:3000/api/produsen', {
         params: { id: req.query.id },
      })
      .then(function (response) {
         res.render('routing-produsen/update-produsen', {
            produsen: response.data,
         });
      });
});

/**
 *  @description untuk endpoint API nya
 *  @method GET,POST,PUT,DELETE /
 */

router.post('/api/produsen', produsenController.create);
router.get('/api/produsen', produsenController.fetch);
router.put('/api/produsen/:id', produsenController.update);
router.delete('/api/produsen/:id', produsenController.delete);
module.exports = router;
