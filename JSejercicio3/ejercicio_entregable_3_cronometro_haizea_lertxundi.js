// no he sido capaz de hacer los test y no te los he adjuntado,
// tampoco he sido capaz de hacer la parte de fetch podia haberlo copiado de chatGPT pero es que ni he entendido lo que estaba haciendo.
// pero bueno aqui te dejo el cronometro. seguire haciendo ejercicios a ver si lo pillo mejor.
// si no ya te escribire para que me ayudes :)

"use strict";

let segundos = 0;
let estaCorriendo = false;
let intervalo = null;

const display = document.getElementById("cronometro");

document.addEventListener("click", () => {
  if (estaCorriendo) {
    parar();
  } else {
    empezar();
  }
});

function pad2(n) {
  return n < 10 ? "0" + n : String(n);
}

function render() {
  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = segundos % 60;
  display.textContent = `${pad2(minutos)}:${pad2(segundosRestantes)}`;
}

function empezar() {
  if (estaCorriendo) return;
  estaCorriendo = true;
  intervalo = setInterval(() => {
    segundos += 1;
    render();
  }, 1000);
}

function parar() {
  if (intervalo) {
    clearInterval(intervalo);
    intervalo = null;
  }
  estaCorriendo = false;
}

render();
