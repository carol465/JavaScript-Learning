/*
Enunciado:
Implementa a função applyDiscount(cart, discountPercentage) que:

Recebe um cart (array de objetos com { name, price, quantity }).
Recebe discountPercentage (número de 0 a 100).
Retorna um novo array com os mesmos itens, mas os preços têm o desconto aplicado.
O array original não deve ser modificado.

Implementa também getTotal(cart) que calcula o total do carrinho (price * quantity somado para cada item).
Se discountPercentage for < 0 ou > 100, lança Error("Invalid discount").
*/

const cart = [
    {name: "computer", price: 750, quantity: 2},
    {name: "tv", price: 2000, quantity: 1},
    {name: "phone", price: 400, quantity: 3}
];

function getTotal(cart){
    let totalPrice = 0;
    cart.forEach(item=>{
        totalPrice = totalPrice + (item.price * item.quantity);
});
    return totalPrice;
}


function applyDiscount(cart, discountPercentage) {
    if (discountPercentage < 0 || discountPercentage > 100) throw new Error("Invalid discount");
    return cart.map(item => {
        return { ...item, price: item.price - (item.price * discountPercentage / 100) }; // cópia para não alterar o original
    });
}

// Teste:
console.log(getTotal(cart));           
const discountedCart = applyDiscount(cart, 50);
console.log(discountedCart);             
console.log(cart);                    
