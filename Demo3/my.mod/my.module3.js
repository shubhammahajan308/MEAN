const myModule1 = require("./my.module1");

let sum = (n1, n2) => {
    return n1 + n2;
};

let diff = (n1, n2) => {
    return n1 - n2;
}

let mult = (n1, n2) => {
    return n1 * n2;
}

let divide = (n1, n2) => {
    return n1 / n2;
}
module.exports = {
    sum,
    diff,
    divide,
    mult

}