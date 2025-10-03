// Seleciona o formulário pelo ID
const form = document.getElementById('form-validador');

// Adiciona um "ouvinte" para o evento de submissão do formulário
form.addEventListener('submit', function (e) {
    // Impede o comportamento padrão do formulário (que é recarregar a página)
    e.preventDefault();

    // Seleciona os campos de input e a área de mensagem
    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');
    const mensagemResultado = document.getElementById('mensagem-resultado');

    // Converte os valores dos campos para números (parseFloat para aceitar decimais)
    const numeroA = parseFloat(campoA.value);
    const numeroB = parseFloat(campoB.value);

    // Valida se o número B é maior que o número A
    if (numeroB > numeroA) {
        // Exibe mensagem positiva
        mensagemResultado.innerHTML = `Formulário válido! O número <strong>${numeroB}</strong> é maior que o número <strong>${numeroA}</strong>.`;
        mensagemResultado.className = 'mensagem mensagem-sucesso'; // Adiciona a classe de sucesso
    } else {
        // Exibe mensagem negativa
        mensagemResultado.innerHTML = `Formulário inválido! O número <strong>${numeroB}</strong> não é maior que o número <strong>${numeroA}</strong>.`;
        mensagemResultado.className = 'mensagem mensagem-erro'; // Adiciona a classe de erro
    }
});