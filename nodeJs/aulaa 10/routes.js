const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatosController = require('./src/controllers/contatosControler')

// Rotas da pagina home
route.get('/', homeController.homePage);
route.post('/', homeController.formulario);

// Rotas de contato
route.get('/contatos', contatosController.contatos);

module.exports = route;