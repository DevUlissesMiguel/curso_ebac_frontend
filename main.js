// Espera o HTML ser completamente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // 1) Nome do usuário do GitHub que queremos buscar
    const userName = 'ogiansouza';
    const endpoint = `https://api.github.com/users/${userName}`;

    // 2) Seleciona os elementos do HTML que vamos atualizar
    const avatarElement = document.getElementById('avatar');
    const nameElement = document.getElementById('name');
    const usernameElement = document.getElementById('username');
    const reposElement = document.getElementById('repos');
    const followersElement = document.getElementById('followers');
    const followingElement = document.getElementById('following');
    const linkElement = document.getElementById('link');

    // Função assíncrona para buscar e preencher os dados
    async function getGitHubProfile() {

        // 2) Usar o que aprendeu sobre try...catch e fetch API
        try {
            // Tenta fazer a requisição para a API
            const response = await fetch(endpoint);

            // Se a resposta não for "ok" (ex: erro 404), disparamos um erro
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }

            // Converte a resposta em JSON
            const data = await response.json();

            // 1) Preenche os dados no HTML com as informações da API
            avatarElement.src = data.avatar_url;
            nameElement.innerText = data.name || 'Nome não disponível'; // Usa um fallback
            usernameElement.innerText = `@${data.login}`;
            reposElement.innerText = data.public_repos;
            followersElement.innerText = data.followers;
            followingElement.innerText = data.following;
            linkElement.href = data.html_url;

        } catch (error) {
            // Se qualquer coisa no bloco 'try' falhar, o 'catch' é executado
            console.error('Erro ao buscar dados do GitHub:', error);
            nameElement.innerText = 'Erro ao carregar';
            usernameElement.innerText = 'Tente novamente mais tarde';
        }
    }

    // Chama a função para iniciar o processo
    getGitHubProfile();
});