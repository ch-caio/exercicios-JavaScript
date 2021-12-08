function retornaHora (data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('esperando por estancia de Date');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false });
}

try {
    const data = new Date ('01-01-2000 12:58:12');
    const hora = retornaHora();
} catch (erro) {
    // funcao para tratar o erro
    console.log(erro);
} finally {
    console.log('tem um bom dia.')
}