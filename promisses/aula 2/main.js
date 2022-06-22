function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperar(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Cai no erro');
            return;
        }

        setTimeout(() => {
            resolve(`${msg.toUpperCase()} Passei pela promisse`);
            return;
        }, tempo);
    });
}

const promisses = [
    // 'primeiro valor',
    esperar('promisse 1', 1000),
    esperar('promisse 2', 2000),
    // esperar(1000, 1000),
    // 'segundo valor'
];


/*
Promise.all(promisses)
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (erro) {
        console.log(erro);
    })

Promise.race(promisses) // retorna a promisse mais rapida
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (erro) {
        console.log(erro);
    })

*/

// Promisse.resolve

function baixarPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.resolve('pagina em cache')
    } else {
        return esperar('pagina baixada', 2000)
    }
}

baixarPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    }).catch(e => console.log(e));