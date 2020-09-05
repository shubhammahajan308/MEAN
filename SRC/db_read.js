

const Promise = require("Bluebird");
const mysql = require("mysql");


Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "User",
}


let readAllUser = async () => {
    const Connection = mysql.createConnection(DB_CONFIG);

    await Connection.connectAsync();

    let sql = "SELECT*FROM USER";



    const results = await Connection.queryAsync(sql);
    await Connection.endAsync();
    console.log(results);
    return results;

}
module.exports = { readAllUser }

readAllUser();