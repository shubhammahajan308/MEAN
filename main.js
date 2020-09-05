const Promise = require("bluebird");
const mysql = require("mysql");




Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let readAllUser = async () => {
    try {
        console.log("I am about to read DB");

        const connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "password",
            database: "assign_1",
        });

        await connection.connectAsync(); // because of bluebird :: Promisified method

        console.log("CONNECTION.SUCCESSFUL!!");

        await connection.endAsync();
    } catch (err) {
        console.log(err);
    }
}


readAllUser();


