const mod1 = require("./my.mod/my.module1")
const mod2 = require("./my.mod/my.module2")
const mod3 = require("./my.mod/my.module3")
const mod4 = require("./my.mod/my.module4")
const total = mod1.sum(4, 5);
console.log(mod1);
console.log(total);

//log module 2
console.log(mod2)

//log module 3
const sumTotal = mod3.sum(4, 6);
console.log("sum", sumTotal);

//log module4
console.log(mod4);
