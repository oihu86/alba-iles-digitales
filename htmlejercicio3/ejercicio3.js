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
    input.value = "";
  }
});
function mostrarNotificacion(mensaje) {
  const noti = document.createElement("div");
  noti.textContent = mensaje;
  noti.className = "notificacion";
  document.body.appendChild(noti);

  setTimeout(() => {
    noti.remove();
  }, 2000);
}
lista.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
    if (e.target.classList.contains("done")) {
      mostrarNotificacion(
        "Tarea marcada como hecha: buen trabajo 👌",
        e.target.textContent
      );
    }
  }
});
input.value = "";
