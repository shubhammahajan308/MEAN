let registerUser = () => {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const email = document.querySelector("#email").value;
    const mobile = document.querySelector("#mobile").value;
}
if (username === "") {
    document.querySelector("#username").style.borderColor = "red";
    return
}
