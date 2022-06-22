function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperar(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Cai no erro');
                return;
            }

            resolve(`${msg.toUpperCase()} Passei pela promisse`);
            return;
        }, tempo);
    });
}

async function executar() {
    try {
        const fase1 = await esperar('Fase 1', rand(0, 3));
        console.log(fase1);
        const fase2 = await esperar('Fase 1', rand(0, 3));
        console.log(fase2);
        const fase3 = await esperar('Fase 1', rand(0, 3));
        console.log(fase3);
    } catch (error) {
        console.log(error)
    }
}

executar();