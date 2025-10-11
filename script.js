// Garante que o código só será executado após o carregamento completo da página
$(document).ready(function () {

    // 4) Controla o evento de submissão do formulário
    $('#form-tarefa').on('submit', function (event) {
        // Impede o comportamento padrão de recarregar a página
        event.preventDefault();

        // Pega o valor digitado no campo de input
        const nomeTarefa = $('#nome-tarefa').val();

        // Cria um novo elemento <li> com o texto da tarefa
        const novoItem = $('<li></li>').text(nomeTarefa);

        // 2) Adiciona o novo item (<li>) à lista (<ul>)
        $('#lista-tarefas').append(novoItem);

        // Limpa o campo do formulário após adicionar a tarefa
        $('#nome-tarefa').val('');
    });

    // 4) Controla o evento de clique nos itens da lista
    // Usamos 'on' na lista pai (<ul>) para garantir que o evento funcione
    // também para os novos itens adicionados dinamicamente (delegação de evento).
    $('#lista-tarefas').on('click', 'li', function () {
        // 3) Adiciona ou remove a classe 'completed' no item clicado
        $(this).toggleClass('completed');
    });

});