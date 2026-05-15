/* Enunciado
Implementa a função stripProperty(obj, property) que:

Recebe um objeto e la dentro tenha chaves em forma de string.
Retorna um novo objeto (ou o mesmo, conforme variação) sem essa chave.
Se a propriedade não existir, retorna o objeto inalterado. 
*/

const user ={
    username = "Carol",
    age = 28,
    password = "465"
}

function stripProperty(password){
    delete user.password;
    console.log(user);
}