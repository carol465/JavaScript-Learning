/*Enunciado:
Implementa a classe BankAccount que gere uma conta bancária simples.
Requisitos:
Construtor recebe initialBalance (default: 0). Se for negativo, lança Error("Invalid initial balance").
deposit(amount) adiciona ao saldo. Se amount <= 0, lança Error("Invalid amount").
withdraw(amount) subtrai do saldo. Se amount > balance, lança Error("Insufficient funds"). Se amount <= 0, lança Error("Invalid amount").
getBalance() retorna o saldo atual.
transfer(amount, otherAccount) transfere para outra conta. Aplica as mesmas validações do withdraw.
*/

class BankAccount{

    constructor(initialBalance = 0){
        if (initialBalance < 0) throw new Error("Invalid initial balance");
        this.balance = initialBalance;
    }

    deposit(amount){
        if (amount <=0) throw new Error ("Invalid Amount");
        this.balance = this.balance + amount;
    }

    withdraw(amount){
        if (amount > this.balance ) throw new Error ("Insufficient funds");
        if (amount <=0) throw new Error ("Invalid Amount");
        this.balance = this.balance - amount;
    }

    getBalance(){
        return this.balance;
    }

    transfer(amount, otherAccount){
    if (amount > this.balance ) throw new Error ("Insufficient funds");
    if (amount <=0) throw new Error ("Invalid Amount");
    this.balance = this.balance - amount;
    otherAccount.deposit(amount);  // chama o deposit da outra conta(objeto)
}

}

// Testes:
const a = new BankAccount(100);
a.deposit(50);
console.log(a.getBalance());  // 150

a.withdraw(30);
console.log(a.getBalance());  // 120

const b = new BankAccount();
a.transfer(20, b);
console.log(a.getBalance());  // 100
console.log(b.getBalance());  // 20

a.withdraw(1000); 
