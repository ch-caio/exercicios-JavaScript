exports.homePage = (req, res) => {
    res.render('index', {
        titulo: 'Titulo da paginaaaaaaaaaaa',
        listaNumeros: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    return;
}

exports.formulario = (req, res) => {
    res.send(req.body);
    return;
}