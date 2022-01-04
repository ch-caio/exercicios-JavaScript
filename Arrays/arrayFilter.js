const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const numerosFilter = numeros.filter(valor => valor % 2 === 0); // dentro do parentes tem uma arrow function que filta a array e retorna apenas o que eu preciso
console.log(numerosFilter)

const pessoas = [
    { nome: 'caio', idade: 25 },
    { nome: 'henrique', idade: 35 },
    { nome: 'souza', idade: 45 },
    { nome: 'pereira', idade: 55 },
];

const pessoasFilterNome = pessoas.filter(obj => obj.nome.length > 5);
const pessoasFilterIdade = pessoas.filter(obj => obj.idade > 50);
const pessoasFilterLetra = pessoas.filter(obj => obj.nome.toLowerCase().startsWith('c'));

console.log(pessoasFilterNome);
console.log(pessoasFilterIdade);
console.log(pessoasFilterLetra);

