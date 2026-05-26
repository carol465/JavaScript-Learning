/*Enunciado:
Implementa pyramid(n) que imprime uma pirâmide de asteriscos com altura n.
pyramid(4);
// *
// **
// ***
// ****
Implementa também centeredPyramid(n) que imprime a mesma pirâmide mas centrada com espaços:
centeredPyramid(4);
//    *
//   ***
//  *****
// *******
Cada linha tem 2*i + 1 asteriscos (1, 3, 5, 7) e o número certo de espaços à esquerda para centrar.
*/

function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
}

function centeredPyramid(n) {
  for (let i = 0; i < n; i++) {
    const spaces = " ".repeat(n - 1 - i);
    const stars = "*".repeat(2 * i + 1);
    console.log(spaces + stars);
  }
}

// Testes:
pyramid(4);
centeredPyramid(4);