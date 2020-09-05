const fs = require("fs");
const Promise = require("bluebird");
//const { timeStamp } = require("console");

// promisification :: converts all the callback methods and return as Promise
Promise.promisifyAll(fs);

let readDemo = () => {
    const filePath1 = "C:/Users/Shubham/Desktop/MEAN/Project2/SRC/temp.txt";

    fs.readFileAsync(filePath1, { encoding: "utf-8" })
        .then((data) => {
            console.log(data);

            const filePath2 = "C:/Users/Shubham/Desktop/MEAN/Project2/SRC/temp.txt";
            return fs.readFileAsync(filePath2, { encoding: "utf-8" });
        })
        .then((data) => {
            console.log(data);

            const filePath3 = "C:/Users/Shubham/Desktop/MEAN/Project2/SRC/temp.txt";
            return fs.readFileAsync(filePath3, { encoding: "utf-8" });
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
};

readDemo();