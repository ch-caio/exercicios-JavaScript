function Produto(nome, preco){
    this.nome;
    this.preco;
}

Produto.prototype.aumento = function(valor) {
    this.preco += valor;
}

Produto.prototype.desconto = function(valor) {
    this.preco -= valor;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

const camiseta = new Camiseta('regata', 7.5, 'preto');
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = camiseta;

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco + (percentual / 100));
};

function Caneca( nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor !== 'number') return;
            estoque = valor
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Gen', 111);
const caneca = new Caneca('caneca nome', 13, 'plastico', 5);
caneca.estoque = 100;

console.log(caneca.estoque)
console.log(caneca)
console.log(camiseta)
console.log(produto)

