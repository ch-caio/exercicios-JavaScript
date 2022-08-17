exports.homePage = (req, res) => {
    res.render('index');
    return;
}

exports.formulario = (req, res) => {
    res.send(req.body);
    return;
}