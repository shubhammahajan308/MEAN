const Promise = require("bluebird")
const mysql = require("mysql")

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DBCONFIG = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "user",
};

let addUser = async (input) => {
    const Connection = mysql.createConnection(DBCONFIG);
    await Connection.connectAsync();

    let sql = "insert into user(username,uid,password,mobno,email)values(?,?,?,?,?)";
    await Connection.queryAsync(sql, [
        input.username,
        input.uid,
        input.password,
        input.mobno,
        input.email]
    );
    await Connection.endAsync();

};
module.exports = { addUser };
