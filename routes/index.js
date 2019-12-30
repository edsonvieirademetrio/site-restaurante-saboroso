var conn = require('./../inc/db')
var express = require('express');
var router = express.Router();

const titleSite = 'Restaurante Saboroso - O mais saboroso da cidade!'

/* GET home page. */
router.get('/', function(req, res, next) {

  conn.query(`
    SELECT * FROM tb_menus ORDER BY title
  `,(err, results)=>{
      if(err){
        console.log(err)
      }

      res.render('index', {
        title: titleSite,
        menus: results
      })
  })
});

router.get('/contacts', function(req, res, next){
  res.render('contacts', {
    title: titleSite,
    backgroundHeader: 'images/img_bg_3.jpg',
    titlePage: 'Está em contato conosco!'
  })
})

router.get('/menus', function(req, res, next){
  res.render('menus', {
    title: titleSite,
    backgroundHeader: 'images/img_bg_1.jpg',
    titlePage: 'Escolha nosso menu!'
  })
})

router.get('/reservations', function(req, res, next){
  res.render('reservations', {
    title: titleSite,
    backgroundHeader: 'images/img_bg_2.jpg',
    titlePage: 'Faça sua reserva!'
  })
})

router.get('/services', function(req, res, next){
  res.render('services', {
    title: titleSite,
    backgroundHeader: 'images/img_bg_1.jpg',
    titlePage: 'Veja nossos serviços!'
  })
})
module.exports = router;
