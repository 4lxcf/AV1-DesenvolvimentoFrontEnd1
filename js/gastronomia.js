function toggleDica() {
const dica = document.getElementById("dica");
if (dica.style.display === "none" || dica.style.display === "") {
    dica.style.display = "block";
} else {
 dica.style.display = "none";
}
}

document.addEventListener("DOMContentLoaded", function() {
   const formGastronomia = document.querySelector("form");
formGastronomia.addEventListener("submit", function(e) {
e.preventDefault();
 const nomeUser = document.getElementById("nome").value;
const emailUser = document.getElementById("email").value

if (nomeUser == "" || emailUser == "") {
 alert("Preencha os campos!");
return
}
alert("Roteiro enviado para " + nomeUser + " com sucesso!");
 formGastronomia.reset()
});

const todasImagens = document.querySelectorAll("#principais-pratos img");
todasImagens.forEach(function(img) {
img.addEventListener("mouseenter", function() {
    img.style.opacity = "0.8";
img.style.cursor = "pointer"
});
img.addEventListener("mouseleave", function() {
img.style.opacity = "1";
});
});
});