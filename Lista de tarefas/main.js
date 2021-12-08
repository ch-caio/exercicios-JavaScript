const inputTarefa = document.querySelector('.nova-tarefa');
const buttonTarefa = document.querySelector('.adicionar-tarefa');
const tarefa = document.querySelector('.tarefas');


function criarLi() {
    const li = document.createElement('li');
    return li;
}

function criarTarefa(textoInput) {
    const li = criarLi();
    li.innerText = textoInput;
    tarefa.appendChild(li);
    inputTarefa.value = ''
    criarBtnApagar(li);
    salvarTarefas();
}

buttonTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
})

function criarBtnApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    li.appendChild(botaoApagar);
    botaoApagar.setAttribute('class', 'apagar')
}

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas() {
    const liTarefas = tarefa.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto)
    }
    const tarefaJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefa', tarefaJSON);
}

function adicionarTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefa');
    const listaDeTarefas = JSON.parse(tarefas)
    for (let tarefas of listaDeTarefas) {
        criarTarefa(tarefas);
    }
}
adicionarTarefasSalvas();