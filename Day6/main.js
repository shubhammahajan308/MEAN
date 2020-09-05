const PI = require("./my_mod/my.module1")
const mod2 = require("./my_mod/my.module2");
const mod3 = require("./my_mod/my.module3");
const mod4 = require("./my_mod/my.module4");
//VALUES From module1
console.log(PI);
console.log("I am main Function")

//values from module2

console.log(mod2);
console.log(mod2.APP_NAME);
console.log(mod2.MY_AREA);

//values from module3

console.log(mod3);
console.log(mod3.app);
console.log(mod3.pi);

//values from module4

console.log(mod4);
console.log(mod4.app_name);
console.log(mod4.pi);
console.log(mod4.opt)