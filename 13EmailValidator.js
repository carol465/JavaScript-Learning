/* Enunciado
Implementa isValidEmail(email) que retorna true se a string for um email válido, false caso contrário.
Regras (validação simples):
Tem de conter exatamente um @.
Antes do @: pelo menos 1 caractere, sem espaços.
Depois do @: tem de conter pelo menos um ., com pelo menos 1 caractere antes e depois.
Não pode ter espaços.
*/

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function extractDomain(email) {
  if (!isValidEmail(email)) throw new Error("Invalid email");
  return email.split("@")[1];
}