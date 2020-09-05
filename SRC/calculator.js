class Calculator {
    add(n1, n2) {
        return n1 + n2;
    }
    subtract(n1, n2) {
        return n1 - n2;
    }
}

let output = new Calculator();

console.log(output.add(10, 15));

console.log(output.subtract(10, 15));