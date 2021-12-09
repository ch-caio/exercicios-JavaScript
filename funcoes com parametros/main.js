// no argumento da função existe tambem o comando arguments
// so funciona com 'function'
function funcao() {
    let total = 0
    for (let argumento of arguments) {
        total += argumento // vai somar todos os valores que foi passado como argumento
    }
    console.log(total)
}

funcao(1, 2, 3, 4, 5, 'valor 1', 'valor 2')


// rest operator 
function conta(operador, acumulador, ...rest) {
    for (let numero of rest) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
}

conta('/', 0, 10, 2)