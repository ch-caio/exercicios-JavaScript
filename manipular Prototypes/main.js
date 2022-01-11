function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(valor) {
    this.preco = this.preco - (this.preco * (valor / 100))
}

Produto.prototype.aumento = function(valor) {
    this.preco = this.preco + (this.preco * (valor / 100))
}

const p2 = {
    nome: 'caneca',
    preco: 20
};

Object.setPrototypeOf(p2, Produto.prototype)

p2.aumento(100)
const p1 = new Produto('camisa', 50)


const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 100
    }
})

p3.aumento(50)

console.log(p3)