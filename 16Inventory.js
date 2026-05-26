/*Enunciado:
Implementa a classe Inventory que gere um stock de produtos.
Requisitos:
Construtor recebe um nome (storeName). O inventário inicial é vazio.
addItem(name, quantity) adiciona quantidade ao item. Se o item não existir, cria-o. Se quantity <= 0, lança Error("Invalid quantity").
removeItem(name, quantity) retira quantidade. Se o item não existir ou a quantidade exceder o stock atual, lança Error("Insufficient stock").
getStock(name) retorna a quantidade atual do item (0 se não existir).
getAllStock() retorna um objeto com todos os itens e quantidades.
getLowStock(threshold) retorna array dos nomes de itens com quantidade <= threshold.
*/

class Inventory{

    constructor(storeName){
        this.storeName = storeName;
        this.items = {};
    }

    addItem(name, quantity){
        if (quantity <= 0) throw new Error("Invalid quantity");
        if (this.items[name] !== undefined) { // se já existe, 
            this.items[name] = this.items[name] + quantity; // aceder à quantidade atual desse item e acrescentar quantidade
        } 
        else {
            this.items[name] = quantity;
        };
    }

    removeItem(name, quantity) {
        if (!this.items[name] || this.items[name] < quantity) {
        throw new Error("Insufficient stock");
        }
        this.items[name] -= quantity;
        if (this.items[name] === 0) {
        delete this.items[name];
        }
  }
    getStock(name) {
        return this.items[name] || 0;
  }

    getAllStock() {
        return { ...this.items };   // cópia para não expor estado interno
    }

    getLowStock(threshold) {
        return Object.keys(this.items)
        .filter(name => this.items[name] <= threshold);
    }

}

// Testes:
const inv = new Inventory("MinhaLoja");
inv.addItem("Apple", 10);
inv.addItem("Bread", 5);
inv.addItem("Apple", 3);      

console.log(inv.getStock("Apple"));  
console.log(inv.getStock("Banana")); 

inv.removeItem("Apple", 8);
console.log(inv.getStock("Apple"));  

console.log(inv.getLowStock(5));       
console.log(inv.getAllStock()); 


