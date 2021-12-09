// first class object 
// function expression
// é possivel guardar a função em uma variavel e chamar dentro de outra função que recebe uma função com argumento
const souUmDado = function () {
    console.log('sou um dado')
}

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado);

// arrow function
const arrowFunction = () => {
    console.log('arrow function')
}


// função dentro de objeto 
const obj = {
    falar() {
        console.log('falando dentro do obj')
    }
}

obj.falar();