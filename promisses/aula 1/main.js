function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperar(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(false);

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperar('mensagem 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta)
        return esperar('111', rand(1, 3));
    }).then(resposta => {
        console.log(resposta);
        return esperar(1234, rand(1, 3)); // testando o catch
    }).then(resposta => {
        console.log(resposta);
    })
    .catch(e => {
        console.log('BAD REQUEST', e);
    });
