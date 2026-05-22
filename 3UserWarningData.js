/* Enunciado
Implementa duas classes:

User:
Construtor: username.
getUsername() retorna o nome.
setUsername(name) atualiza o nome.

ChatUser extends User:
Construtor: username.
Mantém um contador interno de avisos (warningCount), começa em 0.
giveWarning() incrementa o contador em 1.
getWarningCount() retorna o número de avisos.
*/

class User{

constructor(username){
    this.username = username;
}

getUsername(){
    return this.username;
}

setUsername(name){
    this.username = name;
}

}
class ChatUser extends User{

constructor(username, warningCount = 0){
    super(username);
    this.warningCount = warningCount;
}


giveWarning(){
    this.warningCount++;
}

getWarningCount(){
    return this.warningCount;
}

}

const user1 = new ChatUser("Carolina");
user1.giveWarning();
user1.giveWarning();
user1.giveWarning();
console.log(user1.getWarningCount()); 
user1.setUsername("Carolina Pereira");
console.log(user1.getUsername());