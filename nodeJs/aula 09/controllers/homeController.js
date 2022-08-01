exports.homePage = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    `);
}

exports.formulario = (req, res) => {
    res.send('sei la ')
}