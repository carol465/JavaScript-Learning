/* Enunciado:

Implementa a função fizzBuzz(n) que imprime os números de 1 a n (inclusive) com as seguintes regras:

Se o número for divisível por 3 e 5 → imprime "FizzBuzz".
Se for divisível só por 3 → imprime "Fizz".
Se for divisível só por 5 → imprime "Buzz".
Caso contrário → imprime o número.

Cada saída numa linha separada (console.log).

*/

function fizzBuzz() {
    for ( let i = 0; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
