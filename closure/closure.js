function createCounter(startValue) {
    let count = startValue;
    return{
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        getValue() {
            return count;
        }
    }
    
};

const counter1 = createCounter(0);
const counter2 = createCounter(100);

counter1.increment();
counter1.increment();
console.log(counter1.getValue()); // 2

counter2.increment();
console.log(counter2.getValue()); // 101

console.log(counter1.getValue()); // 2 — unaffected by counter2