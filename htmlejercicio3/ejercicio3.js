const input = document.getElementById("mensaje");
const btn = document.getElementById("copiar");
const salida = document.getElementById("salida");
const lista = document.getElementById("lista-tareas");

btn.addEventListener("click", () => {
  const texto = input.value.trim();
  if (texto !== "") {
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = texto;
    lista.appendChild(nuevoLi);
  }
});
lista.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
});
