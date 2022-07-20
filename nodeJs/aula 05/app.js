const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json'); // caminho absoluto voltando uma pasta 
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

// gerar o arquivo
// const Pessoas = [
//     { nome: 'Caio' },
//     { nome: 'Luis' },
//     { nome: 'Sergio' },
//     { nome: 'Pereira' },
// ]

// const json = JSON.stringify(Pessoas, '', 2)
// escreve(caminhoArquivo, json)


// ler o arquivo
async function lerArquivo(caminho) {
    const dados = await ler(caminho)
    renderizarDados(dados);
}

function renderizarDados(dados) {
    dados = JSON.parse(dados)

    dados.forEach(element => {
        console.log(element.nome);
    });
}

lerArquivo(caminhoArquivo)