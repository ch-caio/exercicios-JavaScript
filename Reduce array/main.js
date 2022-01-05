const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const soma = numeros.reduce(
    function(acumulador, valor) {
        acumulador += valor
        return acumulador
    } , 0
)

// console.log(soma) 

const pessoas = [
    {nome: "Caio", idade: 10},
    {nome: "Henrique", idade: 20},
    {nome: "Souza", idade: 30},
    {nome: "Pereira", idade: 40}
];

const maisVelho = pessoas.reduce(function(acumulador, valor){
    if (acumulador.idade > valor.idade) return acumulador;
    return valor
})

console.log(maisVelho)