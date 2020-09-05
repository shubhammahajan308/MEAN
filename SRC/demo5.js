const fs = require("fs");
const Promise = require("bluebird");

// promisification :: converts all the callback methods and return as Promise
Promise.promisifyAll(fs);

let readDemo = () => {
    const filePath1 = "C:/Users/Shubham/Desktop/MEAN/Project2/SRC/temp0.txt";

    fs.readFileAsync(filePath1, { encoding: "utf-8" })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log("you got an error");
        });
};

readDemo();