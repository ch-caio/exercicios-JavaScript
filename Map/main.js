const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const dobro = numeros.map(valor => valor = `valores: ${valor * 2}`)
// console.log(dobro)

const pessoa = [
    { nome: 'Caio', idade: 10 },
    { nome: 'Henrique', idade: 11 },
    { nome: 'Souza', idade: 12 },
    { nome: 'Pereira', idade: 13}
]

const nomes = pessoa.map( obj => obj.nome)
const idade = pessoa.map( obj => ({idade: obj.idade}))
const ids = pessoa.map( function(obj, indice){
    const newObj = { ...obj };
    newObj.id = indice;
    return newObj
})



console.log(ids)