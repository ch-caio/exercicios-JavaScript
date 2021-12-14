function criarCalculadora() {
    return {
        display: document.querySelector('.display'),
        // btnClearDisplay: document.querySelector('.btn-clear'),

        teclaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.calcular();
                }
            })
        },

        calcular() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if (!conta) {
                    alert('conta invalida')
                    return;
                }
                this.display.value = String(conta)
            } catch (e) {
                alert('conta invalida');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagarUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        iniciar() {
            this.cliqueBotoes();
            this.teclaEnter();
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagarUm();
                }

                if (el.classList.contains('btn-equal')) {
                    this.calcular();
                }
            });
        },

        btnParaDisplay(value) {
            this.display.value += value;
        }
    };
}

const calculadora = criarCalculadora();
calculadora.iniciar();