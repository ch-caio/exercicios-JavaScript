const { Pessoa } = require('./mod')
const path = require('path')
const axios = require('axios')

axios('http://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));

/*
formas de importar no module
module.exports
axios
 
*/