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
        const password = req.query.password;
        const email = req.query.email;
        const mobno = req.query.mobno;

        const connection = mysql.createConnection({
            user: "root",
            password: "password",
            host: "localhost",
            database: "user",
        });

        await connection.connectAsync();

        let sql =
            "INSERT INTO USER (USERNAME, PASSWORD, EMAIL, mobno) VALUES (?, ?, ?, ?)";
        await connection.queryAsync(sql, [username, password, email, mobno]);

        await connection.endAsync();

        const json = { message: "Hurrrayyy, Record Added, Lets Celebrate!!" };
        res.json(json);
    } catch (err) {
        const json = { message: "Error Occured!!" };
        res.json(json);
    }
});

app.get("/adduser", async (req, res) => {
    try {
        const input = req.query;
        await dbadd.addRecord(input);

        const json = { message: "Success" };
        res.json(json);
    } catch (err) {
        const json = { message: "Failure" };
        res.json(json);
    }
});

app.get("/alluser", async (req, res) => {
    try {
        const results = await dbread.readAllUser();

        res.json(results);
    } catch (err) {
        const json = { message: "Failure" };
        res.json(json);
    }
});

app.listen(3000);