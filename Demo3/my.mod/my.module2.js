const myModule1 = require("./my.module1");

const MY_NUM = 3.1415;
const MY_BOOL = false;
const MY_STR = "NODEJS"

const MY_ARR = [1, 2, 3, 4]

const MY_ARR_STR = ["RAHUL", "ROHIT", "AJAY"]

const myjson = {
    id: 1, title: "RAHUL"
};
const list = [
    { id: 1, title: "A" },
    { id: 2, title: "B" },
    { id: 3, title: "C" }
];

myModule1.exports = {
    MY_NUM,
    MY_BOOL,
    MY_STR,
    MY_ARR,
    MY_ARR_STR,
    myjson,
    list

};

