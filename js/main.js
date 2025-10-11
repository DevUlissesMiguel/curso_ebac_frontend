$(document).ready(function () {

    // 1) Carousel funcionando em slides
    $('#carousel').slick({
        autoplay: true, // Faz o carousel girar sozinho
        dots: true      // Adiciona os pontinhos de navegação
    });

    // 3) Máscaras operativas
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    // 2) Validação
    $('#form-cadastro').validate({
        rules: {
            'nome-completo': {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            'endereco-completo': {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            'nome-completo': 'Por favor, insira o seu nome completo',
            email: 'Por favor, insira um e-mail válido',
            telefone: 'Este campo é obrigatório',
            cpf: 'Por favor, insira um CPF válido',
            'endereco-completo': 'Por favor, insira seu endereço completo',
            cep: 'Por favor, insira um CEP válido'
        },
        submitHandler: function (form) {
            alert("Formulário enviado com sucesso!");
            // Limpa os campos do formulário após o envio
            form.reset();
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos. Por favor, corrija-os.`);
            }
        }
    });
});