btn.addEventListener("click", () => {
  const texto = input.value;
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      salida.textContent = "aqui aparece tu texto: " + texto;
    })
    .catch((err) => {
      salida.textContent = "Error al copiar el texto: " + err;
    });
});
