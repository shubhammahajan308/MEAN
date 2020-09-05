const dbadd = require("./db_add");
const dbread = require("./db_read");


dbadd.addRecordWithJsONParam({
    username: "vijay sm",
    uid: 12,
    password: "vijay",
    email: "vinay@gmail.com",
    mobno: 865654654
});

dbread.readAllUser();