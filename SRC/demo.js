const fs = require("fs");
const promise = require("bluebird");

promise.promisifyAll(fs)

let readDemo = async () => {
    console.log("async await")
    const filePath1 = "C:/Users/Shubham/Desktop/MEAN/Project2/SRC/temp.txt";
    const data1 = await fs.readFileAsync(filePath1, { encoding: "utf-8" });
    console.log(data1);

    const filePath3 = "C:/Users/Shubham/Desktop/MEAN/Project2/SRC/temp.txt";
    const data3 = await fs.readFileAsync(filePath3, { encoding: "utf-8" });
    console.log(data3);

    const filePath2 = "C:/Users/Shubham/Desktop/MEAN/1.txt.txt";
    const data2 = await fs.readFileAsync(filePath2, { encoding: "utf-8" });
    console.log(data2);




}
readDemo();