const express = require('express');
const app = express();

app.use(express.urlencoded({
    extended: true
}));


app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    `);
})

app.post('/', (req, res) => {
    res.send(`Voce enviou: ${req.body.nome}`)
})

app.get('/teste/:idUsuario?', (req, res) => {
    console.log(req.params);
    res.send(req.params.idUsuario);
})

app.listen(3000, () => {
    console.log('Acessar: http://localhost:3000');
})