// função construtora -> constroi objetos

function Pessoa(nome, sobrenome) {
    // privados
    const Id = 123456;
    const metodoPrivado = function () {

    };

    // publico
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function() {
        console.log(`eu sou o ${nome}`);
    };
}

const p1 = new Pessoa('Caio', 'Henrique');
p1.metodo();
