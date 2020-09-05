const Promise = require("bluebird")
const mysql = require("mysql")

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "user",
};

let insertVal = async (q) => {

    let conn = mysql.createConnection(config);

    await conn.connectAsync();

    let sql = "insert into user(username,uid,password,mobno,email)values(?,?,?,?,?)";

    await conn.queryAsync(sql, [q.username, q.uid, q.password, q.mobno, q.email])
    await conn.endAsync();

};

module.exports = { insertVal }