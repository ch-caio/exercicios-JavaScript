function retornaFuncao (nome) {
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao('Luiz')
const funcao2 = retornaFuncao('Caio')
console.dir(funcao)
console.dir(funcao2)

console.log(funcao(), funcao2());

