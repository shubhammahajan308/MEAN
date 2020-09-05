var p = new Promise(function (resolve, reject) {
    const x = "CDAC";
    const y = "DAC";

    if (x === y) {
        resolve();
    } else {
        reject();
    }
});

p.then(function () {
    console.log('same')
},
    function () {
        console.log("not same")
    }
).catch(function () {
    console.log('not same')
});