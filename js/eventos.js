document.addEventListener("DOMContentLoaded", function() {
const formulario = document.querySelector("form");

     formulario.addEventListener("submit", function(event) {
    event.preventDefault()
const campoNome = document.getElementById("nome").value;
 const campoEmail = document.getElementById("email").value

if (campoNome == "" || campoEmail == "") {
alert("Preencha todos os campos.")
return
}
 alert("Cadastro realizado com sucesso, " + campoNome + "!");
  formulario.reset(); 
});

const caixaCuriosidade = document.querySelector(".curiosidade")
caixaCuriosidade.addEventListener("click", function() {
caixaCuriosidade.style.backgroundColor = "#fffbcc"
alert("Obrigado por ler a curiosidade!");
   })

const imagemCarnaval = document.querySelector("figure img")
    imagemCarnaval.addEventListener("click", function() {
imagemCarnaval.style.transform = "scale(1.1)";
        imagemCarnaval.style.transition = "0.3s"
    })
imagemCarnaval.addEventListener("mouseleave", function() {
imagemCarnaval.style.transform = "scale(1)";
})
})