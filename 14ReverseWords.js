/*Enunciado:
Implementa reverseWords(sentence) que recebe uma frase e retorna a mesma frase com a ordem das palavras invertida, mas com as letras de cada palavra na mesma ordem.
reverseWords("Hello world");
// "world Hello"
Espaços extra entre palavras devem ser preservados como espaço único na saída.
Implementa também wordCount(sentence) que retorna um objeto com a contagem de cada palavra (case-insensitive).
jswordCount("the cat and the dog");
// { the: 2, cat: 1, and: 1, dog: 1 }
*/

function reverseWords(sentence) {
  return sentence
    .trim()
    .split(/\s+/) // separa por qualquer espaços uma ou mais vezes
    .reverse()
    .join(" ");
}

function wordCount(sentence) {
  const words = sentence.toLowerCase().trim().split(/\s+/);
  const counts = {};
  for (const word of words) {
    counts[word] = (counts[word] || 0) + 1;
  }
  return counts;
}

// Testes:
console.log(reverseWords("Olá Carolina"));
console.log(reverseWords("  spaces   between   "));
console.log(wordCount("The cat and THE dog"));