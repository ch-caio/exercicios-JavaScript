function Produto(nome, preco, estoque) { // o que ta dentro dos parentes e chamado de keys
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // vai ou nao mostrar a chave 
        value: estoque, // chave ou campo que eu quero configurar 
        writable: true, // pode ou nao alterar o valor 
        configurable: true // pode ou nao configurar
    });
}

const p1 = new Produto('Camiseta', 100, 10)

console.log(Object.keys(p1)) // se eu passar o enumerable pra false nao vai aparecer aqui 




// usando o definePropeties exemplo 


function Produto2(nome, preco, estoque) { // o que ta dentro dos parentes e chamado de keys
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // vai ou nao mostrar a chave 
            value: estoque, // chave ou campo que eu quero configurar 
            writable: true, // pode ou nao alterar o valor 
            configurable: true // pode ou nao configurar
        },
        preco: {
            enumerable: true, // vai ou nao mostrar a chave 
            value: estoque, // chave ou campo que eu quero configurar 
            writable: true, // pode ou nao alterar o valor 
            configurable: true // pode ou nao configurar
        },
        estoque: {
            enumerable: true, // vai ou nao mostrar a chave 
            value: estoque, // chave ou campo que eu quero configurar 
            writable: true, // pode ou nao alterar o valor 
            configurable: true // pode ou nao configurar
        }
    })
}



