// funções factory fabrica um objeto

function criarPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
        },

        fala(assunto = 'falando sobre alguma coisa...') {
            return `${this.nome} ${this.sobrenome} esta ${assunto}`
        },

        altura: altura,
        peso: peso,

        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
    };
}

const pessoa1 = criarPessoa('Caio', 'Pereira', 1.90, 85 )

console.log(pessoa1.nomeCompleto, pessoa1.imc)