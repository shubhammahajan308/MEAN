const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "user",
};

let addRecord = async () => {
    const Connection = mysql.createConnection(DB_CONFIG);
    await Connection.connectAsync();
    let sql = "INSERT INTO USER(USERNAME,PASSWORD,EMAIL,mobno) Values(?,?,?,?)";

    let operation = await Connection.queryAsync(sql, ["shubham", "12345", "shubham@gmail.com", "345678901"]);

    await Connection.endAsync();
    return operation;
};

addRecord();