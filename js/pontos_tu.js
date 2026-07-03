document.addEventListener("DOMContentLoaded", function() {
    const artigos = document.querySelectorAll(".ponto-turistico");
    const barra = document.getElementById("barra-progresso"); // Seleciona a barra
    let indiceAtual = 0;

    function animarBarra() {
        if (!barra) return;

        // 1. Desliga a transição temporariamente e zera a largura instantaneamente
        barra.style.transition = "none";
        barra.style.width = "0%";

        // 2. Um pequeno truque (reflow) para o navegador entender que a barra zerou de verdade
        barra.offsetHeight; 

        // 3. Liga a transição de volta para 4 segundos e manda ir para 100%
        barra.style.transition = "width 4000ms linear";
        barra.style.width = "100%";
    }

    function mostrarPonto(indice) {
        artigos.forEach(function(artigo, i) {
            if (i === indice) {
                artigo.style.display = "block";
            } else {
                artigo.style.display = "none";
            }
        });

        // Dispara a animação da barra toda vez que muda o ponto turístico
        animarBarra();
    }

    // Inicia o primeiro ponto e a primeira barra
    mostrarPonto(indiceAtual);

    setInterval(function() {
        indiceAtual++;
        if (indiceAtual >= artigos.length) {
            indiceAtual = 0;
        }
        mostrarPonto(indiceAtual);
    }, 4000);

    const imagens = document.querySelectorAll(".ponto-turistico img");
    imagens.forEach(function(img) {
        img.addEventListener("click", function() {
            alert("Você selecionou: " + img.alt + "!");
        });
    });
});