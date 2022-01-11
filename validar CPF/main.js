function CalcularCPF() {
  this.display = document.querySelector('.display');
  this.cpfEnviado = this.display.value;
  this.resultado = document.querySelector('.resultado')

  this.inicia = () => {
    this.captuarCliques();
  }

  this.captuarCliques = () => {
    document.addEventListener('click', e => {
      const el = e.target;
      if (el.classList.contains('calcular')) this.calcular();
    });
  };

  this.calcular = () => {
    this.cpf = this.display.value.replace(/\D+/g, '');
    if (this.cpf.length !== 11) return this.resultado.innerHTML("falso");
    const cpfParcial = this.cpf.slice(0, -2);

    criarDigito = (cpfParcial) => {
      const cpfArray = Array.from(cpfParcial);
      let regressivo = cpfArray.length + 1;
      const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
      }, 0);

      const digito = 11 - (total % 11);
      return digito > 0 ? '0' : String(digito);
    }
  }
}

const calcularCPF = new CalcularCPF();
calcularCPF.inicia();