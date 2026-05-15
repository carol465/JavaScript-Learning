/* Enunciado:

Implementa a função stepCounter(counter) que recebe um objeto counter com a seguinte estrutura:

const counter = {
  steps: 0,
  changeBy: function(amount) { this.steps += amount; }
};
A função stepCounter deve retornar um novo objeto que:

Encapsula o counter original (usa-o internamente).
Expõe steps (a propriedade atual do contador).
Expõe métodos increment() e decrement() (incrementar/decrementar 1 passo).
NÃO deve ter a propriedade changeBy (essa é detalhe de implementação interno, escondido).

*/

class StepCounter {
    constructor(counter) {
        this.counter = counter;
    }

    get steps() { //propriedade que executa o código quando lida
        return this.counter.steps; //neste caso vai dar o valor dos steps em tempo real, get obriga a ler sempre que perguntas
    }

    increment() {
        this.counter.changeBy(1); //não precisa do return porque o changeBy não retorna nada
    }

    decrement() {
        this.counter.changeBy(-1);
    }
}

function stepCounter(counter) { // porque no enunciado requer mesmo a criação de uma função
    return new StepCounter(counter);
}

const counter = { // funções nunca estão dentro da class apenas metodos
    steps: 0,
    changeBy: function(amount) { this.steps += amount; }
};

const tracker1 = stepCounter(counter); // não tem o new porque a função já retorna a instância do objeto
tracker1.decrement();                    
tracker1.increment();                     
tracker1.increment();               

console.log(tracker1.steps); 
console.log(tracker1.changeBy);