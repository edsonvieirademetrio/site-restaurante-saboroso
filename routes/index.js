var conn = require('./../inc/db')
var express = require('express');
var menus = require('./../inc/menus')
var reservations = require('./../inc/reservations')
var contacts = require('./../inc/contacts')
var router = express.Router();

const titleSite = 'Restaurante Saboroso - O mais saboroso da cidade!'

/* GET home page. */
router.get('/', function(req, res, next) {

    menus.getMenus().then(results => {
        res.render('index', {
            title: titleSite,
            menus: results,
            isHome: true
        })
    })

});

router.get('/contacts', function(req, res, next) {

    contacts.render(req, res)
})

router.post('/contacts', function(req, res, next) {

    if (!req.body.name) {
        contacts.render(req, res, 'Verifique o campo nome!')
    } else if (!req.body.email) {
        contacts.render(req, res, 'Verifique o email digitado')
    } else if (!req.body.message) {
        contacts.render(req, res, 'Digite uma mensagem')
    } else {
        contacts.save(req.body).then(results => {
            req.body = {}
            contacts.render(req, res, null, "Contato enviado com sucesso!")
        }).catch(err => {
            contacts.render(req, res, err.message)
        })
    }
})

router.get('/menus', function(req, res, next) {
    menus.getMenus().then(results => {
        res.render('menus', {
            title: titleSite,
            backgroundHeader: 'images/img_bg_1.jpg',
            titlePage: 'Escolha nosso menu!',
            menus: results
        })
    })
})

router.get('/reservations', function(req, res, next) {

    reservations.render(req, res)

})

router.post('/reservations', function(req, res, next) {

    if (!req.body.name) {
        reservations.render(req, res, "Verifique o campo nome!")
    } else if (!req.body.email) {
        reservations.render(req, res, "Verifique o email digitado!")
    } else if (!req.body.people) {
        reservations.render(req, res, "Selecione o número de pessoas")
    } else if (!req.body.date) {
        reservations.render(req, res, "Verifique a data digitada!")
    } else if (!req.body.time) {
        reservations.render(req, res, "Verifique o horário digitado!")
    } else {
        reservations.save(req.body).then(results => {
            req.body = {}
            reservations.render(req, res, null, "Reserva efetuada com sucesso!")

        }).catch(err => {
            reservations.render(req, res, err.message)
        })
    }

})

router.get('/services', function(req, res, next) {
    res.render('services', {
        title: titleSite,
        backgroundHeader: 'images/img_bg_1.jpg',
        titlePage: 'Veja nossos serviços!'
    })
})
module.exports = router;