const calculator = {
    add: function(a, b){
        return a + b;
    },

    minus: function(a, b){
        return a - b;
    },

    mult: function(a, b){
        return a * b;
    },

    div: function(a, b){
        return a / b;
    },

    powerof: function(a, b){
        return a ** b;
    },
};

const addResult = calculator.add(2, 3);
const minusResult = calculator.minus(addResult, 1);
const multResult = calculator.mult(addResult, minusResult);
const powResult = calculator.powerof(multResult, minusResult);
const divResult = calculator.div(powResult, addResult);

console.log(addResult);
console.log(minusResult);
console.log(multResult);
console.log(powResult);
console.log(divResult);
