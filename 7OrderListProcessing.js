/* Enunciado:
Implementa a função processOrders(orders, orderId, state) que recebe:

orders — array de objetos do tipo { id, state }.
orderId — número, o ID do pedido a processar.
state — string, o novo estado.

Comportamento:

Se state === "Processing" → retorna novo array com todos os orders, mas a order com id === orderId tem state atualizado para "Processing".
Se state === "Delivered" → retorna novo array sem a order com esse id (filtrada).
Para outros estados → retorna o array inalterado (ou comportamento conforme o enunciado).
id encomenta e orderId id da encomenda que pediram para atualizar
*/


function processOrders(orders, orderId, state){
    if (state === "Processing"){
        return orders.map(order =>
      order.id === orderId ? { ...order, state: "Processing" } : order // O map cria um novo array, 
      // mas os objetos dentro continuam a ser os mesmos, ao alterar, altero o original.
    );
    /* é a mesma coisa que:
        return orders.map(order => {
            if (order.id === orderId) {
                return { ...order, state: "Processing" };
            } else {
                return order;
            }
        });
    */
    }
    if (state === "Delivered"){
       return orders.filter(order => order.id !== orderId);
    }
    else{
        return orders;
    }
}

// Testes:
const orders = [
  { id: 1, state: "Pending" },
  { id: 2, state: "Pending" },
  { id: 3, state: "Pending" }
];

console.log(processOrders(orders, 2, "Processing"));
console.log(processOrders(orders, 2, "Delivered"));
