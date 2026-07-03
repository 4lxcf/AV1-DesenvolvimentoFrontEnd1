document.addEventListener("DOMContentLoaded", function() {
const blocoCuriosidade = document.getElementById("curiosidade");
blocoCuriosidade.style.transition = "0.3s"

blocoCuriosidade.addEventListener("mouseenter", function() {
blocoCuriosidade.style.backgroundColor = "#f0f0f0";
   blocoCuriosidade.style.color = "#333";
  blocoCuriosidade.style.cursor = "pointer"
});
blocoCuriosidade.addEventListener("mouseleave", function() {
blocoCuriosidade.style.backgroundColor = "";
blocoCuriosidade.style.color = "";
});

const btnTopo = document.createElement("button");
btnTopo.innerText = "↑";
btnTopo.style.position = "fixed";
btnTopo.style.bottom = "20px";
btnTopo.style.right = "20px";
btnTopo.style.display = "none";
btnTopo.style.padding = "10px";
document.body.appendChild(btnTopo);

window.addEventListener("scroll", function() {
if (window.scrollY > 200) {
btnTopo.style.display = "block";
} else {
  btnTopo.style.display = "none";
}
});

btnTopo.addEventListener("click", function() {
window.scrollTo({
top: 0,
behavior: "smooth"
});
});
});