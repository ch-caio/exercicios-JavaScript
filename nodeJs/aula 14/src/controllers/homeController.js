const HomeModel = require('../models/HomeModels')

/*
HomeModel.create({
    titulo: 'titulo teste',
    descricao: 'descrição de teste'
}).then(dados => console.log(dados)).catch(e => console.log(e));
*/

exports.homePage = (req, res) => {
    res.render('index');
    return;
}

exports.formulario = (req, res) => {
    res.send(req.body);
    return;
}