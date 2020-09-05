console.log("onload method");

let getNames = function () {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            const refjson = JSON.parse(xhr.responseText);
            logic(refjson);

        }
    };
    xhr.open("GET", "http://fakerestapi.azurewebsites.net/api/Users");
    xhr.send();
};

let logic = function (refjson) {
    // console.log(refjson);
    for (const key in refjson) {
        if (refjson.hasOwnProperty(key)) {
            const element = refjson[key];
            let temp = document.getElementById('parentBlock').children[0].cloneNode(true);
            temp.style.display = "flex";
            temp.children[0].innerHTML = element.ID;
            temp.children[1].innerHTML = element.UserName;
            temp.children[2].innerHTML = element.Password;
            let box = document.getElementById('parentBlock');
            box.appendChild(temp);
            // console.log(temp);
        }
    }
}
