const myModule1 = require("./my.module1");

const cal = {
    sum: (n1, n2) => {
        return n1 + n2;
    },
    diff: (n1, n2) => {
        return n1 - n2;
    }

}

module.exports = cal;