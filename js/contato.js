document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const painelSucesso = document.getElementById("painelSucesso");

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

    function aplicarEstado(input, span, ok, msg) {
        if (input && input.classList) {
            input.className = ok ? 'valido' : 'invalido';
        }
        if (span) {
            span.textContent = ok ? '' : msg;
        }
        return ok;
    }

    function validarNome() {
        const valor = inputNome.value.trim();
        if (valor.length === 0) return aplicarEstado(inputNome, erroNome, false, 'O nome é obrigatório.');
        if (valor.length < 3) return aplicarEstado(inputNome, erroNome, false, 'Mínimo de 3 caracteres.');
        return aplicarEstado(inputNome, erroNome, true, '');
    }

    function validarTelefone() {
        let valor = inputTelefone.value.replace(/\D/g, "");
        let formatado = "";

        if (valor.length === 0) {
            return aplicarEstado(inputTelefone, erroTelefone, false, 'O Telefone é obrigatório.');
        }

        if (valor.length > 0) formatado += "(" + valor.substring(0, 2);
        if (valor.length > 2) formatado += ") " + valor.substring(2, 7);
        if (valor.length > 7) formatado += "-" + valor.substring(7, 11);

        inputTelefone.value = formatado;

        if (valor.length !== 11) {
            return aplicarEstado(inputTelefone, erroTelefone, false, 'Digite os 11 números do telefone (incluindo DDD).');
        }

        return aplicarEstado(inputTelefone, erroTelefone, true, '');
    }

    function validarEmail() {
        const valor = inputEmail.value.trim();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (valor.length === 0) return aplicarEstado(inputEmail, erroEmail, false, 'O e-mail é obrigatório.');
        if (!regex.test(valor)) return aplicarEstado(inputEmail, erroEmail, false, 'Digite um e-mail válido.');
        return aplicarEstado(inputEmail, erroEmail, true, '');
    }

    function validarAssunto() {
        const valor = inputAssunto.value.trim();
        if (valor.length === 0) return aplicarEstado(inputAssunto, erroAssunto, false, 'O assunto é obrigatório.');
        if (valor.length < 15) return aplicarEstado(inputAssunto, erroAssunto, false, 'Mínimo de 15 caracteres.');
        return aplicarEstado(inputAssunto, erroAssunto, true, '');
    }

    function validarMensagem() {
        const valor = inputMensagem.value.trim();
        if (valor.length === 0) return aplicarEstado(inputMensagem, erroMensagem, false, 'Uma breve descrição é obrigatória.');
        if (valor.length < 30) return aplicarEstado(inputMensagem, erroMensagem, false, 'Mínimo de 30 caracteres.');
        return aplicarEstado(inputMensagem, erroMensagem, true, '');
    }

    inputNome.addEventListener('input', validarNome);
    inputNome.addEventListener('blur',  validarNome);

    inputTelefone.addEventListener('input', validarTelefone);
    inputTelefone.addEventListener('blur',  validarTelefone);

    inputEmail.addEventListener('input', validarEmail);
    inputEmail.addEventListener('blur',  validarEmail);

    inputAssunto.addEventListener('input', validarAssunto);
    inputAssunto.addEventListener('blur',  validarAssunto);

    inputMensagem.addEventListener('input', validarMensagem);
    inputMensagem.addEventListener('blur',  validarMensagem);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nOk = validarNome();
        const tOk = validarTelefone();
        const eOk = validarEmail();
        const aOk = validarAssunto();
        const mOk = validarMensagem();

        console.log("Validações:", { nome: nOk, tel: tOk, email: eOk, assunto: aOk, msg: mOk });

        if (nOk && tOk && eOk && aOk && mOk) {
            mostrarSucesso();
        }
    });

    function mostrarSucesso() {       
        // 1. Oculta o formulário (isso está funcionando, certo?)
        form.style.display = 'none';
        
        // 2. Tenta adicionar a classe CSS original
        painelSucesso.classList.add('visivel');
        
        // 3. Força a propriedade display diretamente no HTML para garantir que apareça
        // Se você usa flexbox no CSS para centralizar, mude 'block' para 'flex'
        painelSucesso.style.display = 'block'; 
    }

    window.reiniciar = function() {
        form.reset();

        [inputNome, inputTelefone, inputEmail, inputAssunto, inputMensagem].forEach(input => {
            if (input) input.className = '';
        });

        [erroNome, erroTelefone, erroEmail, erroAssunto, erroMensagem].forEach(span => {
            if (span) span.textContent = '';
        });

        painelSucesso.classList.remove('visivel');
        painelSucesso.style.display = 'none';
        form.style.display = 'flex';
    };
});