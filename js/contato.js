document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const inputNome = document.getElementById("nome");
    const inputTelefone = document.getElementById("telefone");
    const inputEmail = document.getElementById("email");
    const inputAssunto = document.getElementById("assunto");
    const inputMensagem = document.getElementById("mensagem");

    const erroNome = document.getElementById("erroNome");
    const erroTelefone = document.getElementById("erroTelefone");
    const erroEmail = document.getElementById("erroEmail");
    const erroAssunto = document.getElementById("erroAssunto");
    const erroMensagem = document.getElementById("erroMensagem");

    /**
    * Aplica ou remove as classes .valido / .invalido no input
    * e exibe ou limpa a mensagem de erro no span correspondente.
    *
    * @param {HTMLInputElement} input  - O campo a ser validado
    * @param {HTMLElement}      span   - O span que exibe o erro
    * @param {boolean}          ok     - true = válido, false = inválido
    * @param {string}           msg    - Mensagem a exibir quando inválido
    * @returns {boolean}               - Retorna o valor de "ok"
    */
 
    function aplicarEstado(input, span, ok, msg) {
        input.className  = ok ? 'valido' : 'invalido';
        span.textContent = ok ? ''       : msg;
        return ok;
    }

    function validarNome() {
        const valor = inputNome.value.trim();

        if (valor.length === 0) {
            return aplicarEstado(inputNome, erroNome, false, 'O nome é obrigatório.');
        }
        if (valor.length < 3) {
            return aplicarEstado(inputNome, erroNome, false, 'Mínimo de 3 caracteres.');
        }

        return aplicarEstado(inputNome, erroNome, true, '');
    }

    function validarTelefone() {
        let valor = inputTelefone.value.replace(/\D/g, "");
        let formatado = "";

        if (valor.length === 0) {
            return aplicarEstado(inputTelefone, erroTelefone, false, 'O Telefone é obrigatório.');
        }
        if (valor.length > 0) {
            formatado += "(" + valor.substring(0, 2);
        }
        if (valor.length > 2) {
            formatado += ") " + valor.substring(2, 7);
        }
        if (valor.length > 7) {
            formatado += "-" + valor.substring(7, 11);
        }
        if (valor.length !== 11) {
            return aplicarEstado(inputTelefone, erroTelefone, false, 'Digite os 11 números do telefone (incluindo DDD).');
        }

        inputTelefone.value = formatado;
        return aplicarEstado(inputTelefone, erroTelefone, true, '');
    }

    function validarEmail() {
        const valor = inputEmail.value.trim();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (valor.length === 0) {
            return aplicarEstado(valor, erroEmail, false, 'O e-mail é obrigatório.');
        }
        if (!regex.test(valor)) {
            return aplicarEstado(valor, erroEmail, false, 'Digite um e-mail válido.');
        }

        return aplicarEstado(valor, erroEmail, true, '');
    }

    function validarAssunto() {
        const valor = inputAssunto.value.trim();

        if (valor.length === 0) {
            return aplicarEstado(valor, erroAssunto, false, 'O assunto é obrigatório.');
        }
        if (valor.length < 15) {
            return aplicarEstado(valor, erroAssunto, false, 'Mínimo de 15 caracteres.');
        }

        return aplicarEstado(valor, erroAssunto, true, '');
    }

    function validarMensagem() {
        const valor = inputMensagem.value.trim();

        if (valor.length === 0) {
            return aplicarEstado(valor, erroMensagem, false, 'Uma breve descrição é obrigatória.');
        }
        if (valor.length < 30) {
            return aplicarEstado(valor, erroMensagem, false, 'Mínimo de 30 caracteres.');
        }

        return aplicarEstado(valor, erroMensagem, true, '');
    }

    inputNome.addEventListener('input', validarNome);
    inputNome.addEventListener('blur',  validarNome);

    inputTelefone.addEventListener('input', validarTelefone);
    inputTelefone.addEventListener('blur',  validarTelefone);

    inputEmail.addEventListener('input', validarEmail);
    inputEmail.addEventListener('blur',  validarEmail);

    inputNome.addEventListener('input', validarAssunto);
    inputNome.addEventListener('blur',  validarAssunto);

    inputNome.addEventListener('input', validarMensagem);
    inputNome.addEventListener('blur',  validarMensagem);

    form.addEventListener('submit', function(event) {
        // Impede o recarregamento padrão da página
        event.preventDefault();

        // Roda todas as validações (mesmo que o usuário não tenha tocado nos campos)
        const nomeOk      = validarNome();
        const telefoneOk  = validarTelefone();
        const emailOk     = validarEmail();
        const assuntoOk   = validarAssunto();
        const mensagemOk  = validarMensagem();

        // Só prossegue se tudo for válido
        if (nomeOk && telefoneOk && emailOk && assuntoOk && mensagemOk) {
            mostrarSucesso();
        }
    });

    // Falta inserir o que vai aparecer quando for um sucesso!
    function mostrarSucesso() {
        // Oculta o formulário
        form.style.display = 'none';
    }

    function reiniciar() {
        // Limpa todos os campos
        form.reset();

        // Remove classes de validação de todos os inputs
        [inputNome, inputTelefone, inputEmail, inputAssunto, inputMensagem].forEach(input => {
            input.className = '';
        });

        // Limpa todas as mensagens de erro
        [erroNome, erroTelefone, erroEmail, erroAssunto, erroMensagem].forEach(span => {
            span.textContent = '';
        });

        // Oculta o painel de sucesso e mostra o form novamente
        // painelSucesso.classList.remove('visivel');
        form.style.display = 'block';
    }
});
