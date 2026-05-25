function stepCounter(counter) {
  return {
    get steps() { return counter.steps; },
    increment() { counter.changeBy(1); },
    decrement() { counter.changeBy(-1); }
  };
}

// Testes:
const counter = {
  steps: 0,
  changeBy(amount) { this.steps += amount; }
};

const tracker = stepCounter(counter);
tracker.increment();
tracker.increment();
tracker.increment();
tracker.decrement();
console.log(tracker.steps);   
console.log(tracker.changeBy);   