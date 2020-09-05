const Promise = require("bluebird");
const mysql = require("mysql");
const Connection = require("mysql/lib/Connection");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let helloDatabase = async () => {
    const conn = mysql.createConnection({

        host: "localhost",
        user: "root",
        password: "password",
        database: "assign_1",
    });
    await conn.connectAsync();

    let sql = "Select * FROM orders";
    let results = await conn.queryAsync(sql);

    conn.end();

    console.log(results)

    return results;
}

helloDatabase();