const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const dbadduser = require("./dbadduser");

app.get("/a", (req, res) => {
    res.json({ title: "WELCOME!!" });

});
/*app.get("/adduser", async (req, res) => {
    try {
        const input = req.query;
        await dbadduser.addUser(input);
        res.json({ message: "success" });
    } catch (err) {
        console.log(err);
        res.json({ message: err });
    }
});*/

app.post("/addUser", async (req, res) => {
    try {
        const input = req.body;
        await dbadduser.addUser(input);
        res.json({ message: "success post" });

    } catch (err) {
        console.log(err);
        res.json({ message: "failure post" });
    }
});
app.post("/sample", async (req, res) => {
    res.json(req.body);
})
app.listen(3000);