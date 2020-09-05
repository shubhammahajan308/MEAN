let register = async () => {
    const user = document.querySelector("#username").value
    const pass = document.querySelector("#password").value

    let url = 'http://localhost:4500/enter?username=${user}&password=${pass}';
    await fetch();
};