const fs = require("fs");
const promise = require("bluebird");

promise.promisifyAll(fs);

const filePath1 = "C:/Users/Shubham/Desktop/MEAN/Project2/SRC/temp.txt";

fs.readFileAsync(filePath1, { encoding: "utf-8" })
    .then((data) => {
        console.log(data);

        const filePath2 = "C:/Users/Shubham/Desktop/MEAN/Project2/SRC/temp.txt"
        return fs.readFileAsync(filePath2, { encoding: "utf-8" });
    })
    .then((data) => {
        console.log(data);
        const filepath3 = "C:/Users/Shubham/Desktop/MEAN/Project2/SRC/temp.txt"
        return fs.readFileAsync(filepath3, { encoding: "utf-8" });
    }).then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log("you got an error" + err)
    })
