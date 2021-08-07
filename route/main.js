//kita membutuhkan module router untuk membagi router
var router = require('express').Router();
const { response } = require('express');

//import controller Product
const productController = require('../controllers/productController');

//import models product.
const product = require('../models/product');

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
      .get('/* Ini endpoint API router.get yang dipake buat get data, masukkin sana*/')
      .then(function (response) {
         console.log(response.data);
         res.render('index', { product: /* ini isi response datanya, gmn caranya??*/ });
      })
      .catch((err) => {
         res.send(err);
      });
});

router.get('/add-product', (req, res) => {
   res.render('main/add-product');
});

router.get('/update-product', (req, res) => {
   axios
      .get('/* Endpoint dari route.put untuk editing taruh disini yak */', {
         params: { id: req.query.id },
      })
      .then(function (response) {
         res.render('main/update-product', {
            product: response.data,
         });
      });
});

/**
 *  @description untuk endpoint API nya
 *  @method GET,POST,PUT,DELETE /
 */

router.post('/api/products', /* Panggil controllerProduct dong dengan fungsi create?*/);
router.get('/api/product', /* Panggil controllerProduct dong dengan fungsi get data(fetch)?*/);
router.put('/api/product/:id', /* Panggil controllerProduct dong dengan fungsi update?*/);
router.delete('/api/product/:id', /* Panggil controllerProduct dong dengan fungsi delete?*/);
module.exports = router;
