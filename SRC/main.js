const b = require("bluebird")
const ex = require("express")
const obj = ex();
//const obj1 = require("cors");

const data = require("./data");


obj.get("/enter", async (req, res) => {
    try {
        const place = req.query;
        await data.insertVal(place);
        res.json({ msg: "Success" });
    } catch (err) {
        res.json({ msg: "failure" })
    }
})
obj.listen(4100);
