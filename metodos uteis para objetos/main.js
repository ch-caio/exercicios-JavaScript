// como copitar um objeto
const produto = { nome: 'camiseta', preco: 100 };
const produtoCopiado = Object.assign({}, produto)
const produtoCopiadoComSpread = {...produto}

produtoCopiado.nome = 'bermuda'
produtoCopiado.preco = 150
// Object.freeze(produto) .freeze nao permite mais fazer alterações no objeto 
/*
console.log(produto)
console.log(produtoCopiado)
console.log(produtoCopiadoComSpread)
*/

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

for (let valor of Object.entries(produto)){
    console.log(valor[0], valor[1])
}