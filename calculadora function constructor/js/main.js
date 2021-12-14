function Calculadora() {

    this.inicia = () => {
        this.capturaClick();
        this.capturaEnter();
    };

    this.display = document.querySelector('.display');

    this.capturaClick = () => {
        document.addEventListener('click', event => {
            const element = event.target;
            if (element.classList.contains('btn-num')) this.addNumDisplay(element);
            if (element.classList.contains('btn-clear')) this.clear();
            if (element.classList.contains('btn-del')) this.delete(element);
            if (element.classList.contains('btn-equal')) this.calcular(element);
        });
    }

    this.addNumDisplay = element => this.display.value += element.innerText; // metodo em uma linha
    this.clear = () => this.display.value = '';
    this.delete = () => this.display.value = this.display.value.slice(0, -1);

    this.capturaEnter = () => {
        document.addEventListener('keypress', event => {
            if (event.keyCode !== 13) return;
            this.calcular();
        });
    };

    this.calcular = () => {
        try {
            const conta = eval(this.display.value);
            if (!conta) {
                alert('conta invalida');
                return;
            }
            this.display.value = conta;
        } catch (e) {
            alert('calculo invalido');
            return;
        }
    };
}

const calculadora = new Calculadora();
calculadora.inicia();