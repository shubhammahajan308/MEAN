const Promise = require("bluebird")
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let config = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "User"
}

let addRecord = async () => {
    const Connection = mysql.createConnection(config);

    await Connection.connectAsync();

    let sql = "INSERT INTO USER(USERNAME,PASSWORD,EMAIL,MOBNO)VALUES(?,?,?,?)";

    await Connection.queryAsync(sql, [
        "john sm",
        "john",
        "john@gmail.com",
        "865654654"
    ]);

    await Connection.endAsync();

};

let addRecordWithJsONParam = async (user) => {
    const Connection = mysql.createConnection(config);

    await Connection.connectAsync();

    let sql = "INSERT INTO USER(username,uid,password,email,mobno)VALUES(?,?,?,?,?)";

    await Connection.queryAsync(sql, [user.username, user.uid, user.password, user.email, user.mobno])
    await Connection.endAsync();
};

module.exports = {
    //addRecord,
    addRecordWithJsONParam
};
//addRecord();



