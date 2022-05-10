class Formulario {
    Constructor() {
        this.form = document.querySelector('.formulario')

        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('nao enviado...');
    }
}

const formulario = new Formulario();