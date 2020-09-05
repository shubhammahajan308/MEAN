const fs = require("fs")
const promise = require("bluebird")

promise.promisifyAll(fs);
//converts all callback methods and return as promise

let readDemo = () => {
    const filepath1 = "C:/Users/Shubham/Desktop/MEAN/Project2/SRC/temp.txt"

    const mpromise = fs.readFileAsync(filepath1, { encoding: "utf-8" })
    console.log(mpromise);
    mpromise.then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
}
readDemo();