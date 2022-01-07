function Produto(nome, preco, quantidade) {

    Object.defineProperty(this, 'quantidade', {
        enumerable: true,
        configurable: true,
        get: function () {
            return quantidade;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('valor deve ser numerico')
            }
            preco = valor
        }
    });
}

function CriarProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor
        }
    }
}

const produto = CriarProduto('camiseta')
console.log(produto.nome)
