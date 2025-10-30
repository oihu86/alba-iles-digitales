// let cuentaAtras = 10

// while (cuentaAtras > 0) {
// console.log(cuentaAtras)
// cuentaAtras = cuentaAtras - 1
// if (cuentaAtras % 2 === 0) {
//    continue
// }
//  console.log(cuentaAtras + " segundos")
// }
// console.log("despegue")

// function(window.prompt usuario)

// let students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]]
// let Avgmarks = 0;
// for (let i = 0; i < students.length; i++) {
//     Avgmarks += students[i][1];
//     let avg = (Avgmarks / students.length);
// }

// console.log("Average grade: " + (Avgmarks) / students.length)

// if (avg < 60) {
//     console.log("Grade F");
// } else if (avg < 70) {
//     console.log("Grade D");
// } else if (avg < 80) {
//     console.log("Grade C")
// } else if (avg < 90) {
//     console.log("Grade B")
// } else if (avg <= 100) {
//     console.log("Grade A")
// }

//

// export const mapWithCb = (array, callback) => {
//   if (!Array.isArray(array) || typeof callback !== 'function') {
//     throw Error();
//   }
//   return array.map(item => callback(item));
// };

// let primeraPregunta = confirm("El perro es un mamifero")
// if (primerPregunta = true) {
//     let segundaPregunta = confirm("el perro tiene 4 patas")
//     if (segundaPregunta = true){
//         alert("es un perro")
//     } else {
//         alert("no es un perro")
//     }
// }
// -------------------------------------------------------------------------

// Mi primer condicional

// Realizar un algoritmo que pida el nombre de una persona. Si el dato entra vacío, debe pedir nuevamente al usuario que introduzca su nombre (“No ha introducido ningún nombre”).
// Una vez hecho esto, que se despliegue una alerta de bienvenida con el nombre del usuario.

// let nombreIngresado = prompt("Por favor escribe tu nombre");
// if (nombreIngresado.length !== 0) {
//   alert(`Bienvenido ${nombreIngresado}`);
// } else {
//   alert("No ha ingresado ningún nombre!");
// }
// ---------------------------------------------------------------------------

// Números pares o impares VER CON DAVID

//     Pedirle al usuario que introduzca 1 numero.
//     Comparar si es par o no, a través de un if/else.
// Si es par que muestre una alerta indicando que el número es par o en caso contrario que muestre una alerta que es impar.

// let numeroNuevo;
// do {
//   numeroNuevo = prompt("Ingresa un número distinto de cero para saber si es par o impar");
//   if (isNaN(numeroNuevo) || numeroNuevo === 0) {
//     alert("No has ingresado ningun numero, ingresa un numero por favor");
//   }
// } while (isNaN(numeroNuevo) || numeroNuevo === 0);

// if (numeroNuevo === 0) {
//   alert("El numero 0 no es considerado par ni impar.");
// } else if (numeroNuevo % 2 === 0) {
//   alert("El numero es par");
// } else {
//   alert("El numero es impar");

//---------------------------------------------------------------------------

// const entrada = prompt("Introduce un número:");
// // const respuesta = entrada !== null;

// if (respuesta ) {
//   const n = Number(entrada);
//   if (Number.isInteger(n)) {
//     if (n % 2 === 0) {
//       alert(`El número ${n} es PAR ✅`);
//     } else {
//       alert(`El número ${n} es IMPAR 🟣`);
//     }
//   } else {
//     alert("Para par/impar necesito un número ENTERO.");
//   }
// } else {
//   alert("No has ingresado ningún número.");
// }

// // Si Cancelas => null; si Aceptas vacío => ""
// if (entrada === null || entrada.trim() === "") {
//   alert("No has ingresado ningún número.");
// } else {
//   const n = Number(entrada);
//   if (!Number.isInteger(n)) {
//     alert("Para par/impar necesito un número ENTERO.");
//   } else if (n % 2 === 0) {
//     alert(`El número ${n} es PAR ✅`);
// //   } else {
// //     alert(`El número ${n} es IMPAR 🟣`);
// //   }
// // }

// let entrada;
// let n;

// do {
//   entrada = prompt("Introduce un número ENTERO:");
//   if (entrada === null) continue; // si cancela, seguimos insistiendo
//   entrada = entrada.trim();
//   if (entrada === "") continue;

//   n = Number(entrada);
// } while (
//   Number.isNaN(n) ||
//   !Number.isInteger(n) // repetir hasta entero válido
// );

// // Aquí ya es un entero seguro
// if (n % 2 === 0) {
//   alert(`El número ${n} es PAR ✅`);
// } else {
//   alert(`El número ${n} es IMPAR 🟣`);
// }

// Escriba una función printNumbers(from, to) que genere un número cada segundo, comenzando desde from y terminando con to.

// Haz dos variantes de la solución.

//     Usando setInterval.
//     Usando setTimeout anidado.

// function printNumbers (from, to){
//   let current = from;
// }

// const persona = {
//   nombre: "Juan",
//   edad: 39,
// };
// console.log(
//   "Hola, me llamo " + persona.nombre + " y tengo " + persona.edad + " años."
// );
const persona = {
  nombre: "Haizea",
  edad: 20,
  presentarse() {
    return `Hola, soy ${this.nombre}`;
  },
};

// PRUEBA 8
