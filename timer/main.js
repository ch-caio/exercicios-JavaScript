const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

function horaEmSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false, timeZone: 'GMT'
    });
}

function iniciarRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = horaEmSegundos(segundos);
    }, 1000);
}

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00'
        segundos = 0;
    }

    if (el.classList.contains('iniciar')) {
        clearInterval(timer);
        iniciarRelogio();
    }

    if (el.classList.contains('pausar')) {
        clearInterval(timer);
    }
});