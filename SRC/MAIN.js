const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const express = require("express");
const app = express();

const dbadd = require("./db_add");
const dbread = require("./db_read");

app.get("/", async (req, res) => {
    try {
        const username = req.query.username;
        const passsword = req.query.password;
        const email = req.query.email;
        const mobile = req.query.mobile;

        mysql.createConnection({
            user: "root",
            password: "password",
            host: "localhost",
            database: "user",
        });

        await connection.connectAsync();

        let sql = "INSERT INTO USER (USERNAME, PASSWORD, EMAIL, MOBILE) VALUES (?, ?, ?, ?)";
        await connection.queryAsync(sql, [username, password, email, mobile]);
        await connection.endAsync();
        const json = { message: "Record added,lets celebrate..." }
        res.json(json);
    } catch (err) {
        const json = { meassage: "error Ocurred!!" };
        res.json(json);
    }
});
