// Aguarda o DOM (a página HTML) ser completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Chama a função principal que busca e exibe os dados
    carregarAlunos();
});

// 1) Adaptar o projeto para preencher dados via requisição Ajax
// 2) Usar try...catch e Fetch API

async function carregarAlunos() {
    // Seleciona os elementos do HTML que vamos manipular
    const lista = document.getElementById('lista-alunos');
    const loading = document.getElementById('loading');

    // Define a URL da API de onde vamos buscar os dados (JSONPlaceholder)
    const url = 'https://jsonplaceholder.typicode.com/users';

    // 2) Bloco try...catch para tratar erros
    try {
        // --- Início do Bloco TRY ---
        // Código que pode falhar (a requisição de rede)

        // 1. Faz a requisição à API usando fetch e aguarda (await) a resposta
        const response = await fetch(url);

        // 2. Verifica se a resposta da rede foi bem-sucedida
        if (!response.ok) {
            // Se a resposta não for "ok" (ex: erro 404, 500), disparamos um erro
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }

        // 3. Converte a resposta em JSON e aguarda (await)
        const dados = await response.json();

        // 4. Remove a mensagem "Carregando..."
        loading.remove();

        // 5. Itera sobre os dados recebidos e os adiciona na lista
        dados.forEach(aluno => {
            // Cria um novo item de lista (<li>)
            const li = document.createElement('li');

            // Adiciona o conteúdo ao <li>
            li.innerHTML = `
                <strong>${aluno.name}</strong><br>
                <small>E-mail: ${aluno.email} | Telefone: ${aluno.phone}</small>
            `;

            // Adiciona o <li> à <ul> no HTML
            lista.appendChild(li);
        });

        // --- Fim do Bloco TRY ---

    } catch (error) {
        // --- Início do Bloco CATCH ---
        // Este bloco só é executado se um erro ocorrer no bloco TRY

        console.error('Falha ao carregar alunos:', error); // Loga o erro no console

        // Exibe uma mensagem de erro amigável para o usuário no HTML
        loading.innerText = 'Ocorreu um erro ao carregar os dados. Tente novamente mais tarde.';
        loading.className = 'error'; // Aplica a classe de estilo de erro
    }
}