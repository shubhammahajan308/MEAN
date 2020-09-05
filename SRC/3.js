const Promise = require("bluebird");
const mysql = require("mysql");
const Connection = require("mysql/lib/Connection");


Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "user",
};

let helloDatabase = async () => {
    const Connection = mysql.createConnection(DB_CONFIG);

    await Connection.connectAsync();

    let sql1 = "SELECT*FROM USER";

    let results = await Connection.queryAsync(sql1);

    Connection.end();

    console.log(results);

    return results;
};
let readByQuery = async () => {
    const Connection = mysql.createConnection(DB_CONFIG);

    await Connection.connectAsync();

    let sql = "SELECT*FROM USER WHERE UID=?";
    let result = await Connection.queryAsync(sql, [12345]);

    await Connection.endAsync();
    console.log(result);
    return result;
};
let readQuery2 = async () => {
    const Connection = mysql.createConnection(DB_CONFIG);
    await Connection.connectAsync();
    let sql = "select*from user where uid=? and email=?";
    let result = await Connection.queryAsync(sql, [1, "ajit@gmail.com"]);
    await Connection.endAsync();
    console.log(result);
    return result;
}

//helloDatabase();
readByQuery();
readQuery2();
