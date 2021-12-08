const max = (x, y) => x > y ? x : y; // function que ja faz tudo na mesma linhas 

console.log(max(100, 50))

const ePaisagem = (largura, altura) => largura > altura // ja retorna true ou false


function fizzBuzz (numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

console.log('a' , fizzBuzz('a')) 
    
for (let i=0; i<=100; i++) {
        console.log(i, fizzBuzz(i))
    }
