const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const ListaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []



function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        
        tarefa: input.value,
        concluida: false

    })

    input.value =''

    mostrarTarefas()
}

    //['comprar café', 'estudar programação']

function mostrarTarefas(){

        let novaLi = ''

        minhaListaDeItens.forEach( (item, posicao) => {
            novaLi = novaLi + `

        <li class="task ${item.concluida && "done"}">
            <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="tarefa-para-lixo" onclick="deletarItem(${posicao})">

        </li>

            `
        })

        ListaCompleta.innerHTML = novaLi


        localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}

function concluirTarefa(posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

    mostrarTarefas()
}


function deletarItem(posicao){
    minhaListaDeItens.splice(posicao, 1)
    
    mostrarTarefas()
}

function recarregarTarefas(){
    const tarefasDoLocalStorange = localStorage.getItem('lista')

    if (tarefasDoLocalStorange){
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorange)
    } 

    mostrarTarefas()
}


recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)