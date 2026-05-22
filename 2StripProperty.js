/* Enunciado
Implementa a função stripProperty(obj, property) que:

Recebe um objeto e la dentro tenha chaves em forma de string.
Retorna um novo objeto (ou o mesmo, conforme variação) sem essa chave.
Se a propriedade não existir, retorna o objeto inalterado. 
*/

const user ={ //objeto
    username: "Carol", //propriedade
    age: 28, //propriedade
    password: "465" //propriedade
}

function stripProperty(obj, property) { // usar uma função generica
    delete obj[property];               // depois é que defino o que quero apagar
    return obj;
}

console.log(stripProperty(user, "password")); // obj= user, property= password