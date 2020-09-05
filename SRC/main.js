const person = require("./person");

let emp1 = require('./person.js')

let emp2 = require('./employee.js')
class Main {
    static main() {
        console.log("this is the entry point")

        let p = new emp1();
        let output = p.getName();

        let e = new emp2();
        let hello = e.hello();

        console.log(output);
        console.log(hello);

    }
}
Main.main();