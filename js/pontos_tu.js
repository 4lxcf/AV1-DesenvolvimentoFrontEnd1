document.addEventListener("DOMContentLoaded", function() {
const artigos = document.querySelectorAll(".ponto-turistico");
let indiceAtual = 0;

function mostrarPonto(indice) {
artigos.forEach(function(artigo, i) {
if (i === indice) {
artigo.style.display = "block";
} else {
artigo.style.display = "none";
}
});
}

    mostrarPonto(indiceAtual);

        setInterval(function() {
    indiceAtual++;
        if (indiceAtual >= artigos.length) {
        ndiceAtual = 0;
        }
        mostrarPonto(indiceAtual);
        }, 4000);

const imagens = document.querySelectorAll(".ponto-turistico img");
imagens.forEach(function(img) {
img.addEventListener("click", function() {
alert("Você selecionou o " + img.alt + "!");
});
});
});