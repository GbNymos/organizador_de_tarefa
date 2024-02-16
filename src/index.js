

function adicionarTarefa() {
    // pegar o valor q esta no campo
    var adiciona = document.getElementById('add').value;

    // ver se o campo esta vazio
    if (adiciona.trim() !== '') {

        // Cria novo elemento 
        var novaTarefaElemento = document.createElement("li");

        // faz o texto aparecer no conteiner
        novaTarefaElemento.textContent = adiciona;

        // Adicionar a nova tarefa à lista
        document.getElementById('listas').appendChild(novaTarefaElemento);
    
        //botao excluir e concluir
        var btn_excluir =document.createElement("button");
        btn_excluir.innerHTML = "❌";
        btn_excluir.onclick=function(){
            excluir(novaTarefaElemento)
        };
        novaTarefaElemento.appendChild(btn_excluir);

       
        var btn_concluir=document.createElement("button");
        btn_concluir.innerHTML="✔️";
        btn_concluir.onclick=function(){
            concluir(novaTarefaElemento)
        };
        novaTarefaElemento.appendChild(btn_concluir);


        // Limpar o campo input
        document.getElementById('add').value = '';
    } else {
        // Alerta se o campo estiver vazio
        alert('Por favor, digite uma nova tarefa.');
    }
}



function excluir(tarefa){
    tarefa.remove();
}


function concluir(tarefa){
    tarefa.style.color="darkgreen";
    tarefa.style.textDecoration = "line-through";
  
}



     
