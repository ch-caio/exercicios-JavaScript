//               -4       -3        -2      -1
//                0        1         2       3
const nomes = ['Caio','Henrique','Souza','Pereira']


// nomes.splice(indice, quantosParaDeletar, elemento1, elemento2, elemento3 ...)
// pop
const removidos = nomes.splice(-3, 1);
console.log(nomes, removidos)


const musicas = ['song 1','song 2','song 3','song 4']
// unshift eu escolho a posição para adicionar
musicas.splice(2, 0, 'new song 1', 'new song 2')
console.log(musicas)


const coisas = ['coisas 1','coisas 2','coisas 3','coisas 4']
// unshift adiciona no final
coisas.splice(coisas.length, 0, 'new coisas 1', 'new coisas 2')
console.log(coisas)