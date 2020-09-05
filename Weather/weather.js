function showdata() {
    let xhr = new XMLHttpRequest;

    let city = document.getElementById('input').value;
    var url = "https://api.openweathermap.org/data/2.5/weather?appid=0e6d345f4115ac44e96beec062960e9d&q=" + city;

    var obj = xhr.open('Get', url);

    xhr.onload = function () {
        let data = JSON.parse(this.responseText);
        console.log(data);
        DomOperation(data);
    }

    xhr.send();
}

function DomOperation(data) {
    var temp_min = data.main.temp_min;
    temp_min = Math.floor(temp_min - 273.15);

    var temp_max = data.main.temp_max;
    temp_max = Math.floor(temp_max - 273.15);

    var city = data.name;
    var country = data.sys.country;
    var feels_like = data.main.feels_like;
    feels_like = Math.floor(feels_like - 273.15);

    var weather = data.weather[0].main;

    document.getElementById('minTemp').innerHTML = temp_min;
    document.getElementById('maxTemp').innerHTML = temp_max;
    document.getElementById('city').innerHTML = city;
    document.getElementById('country').innerHTML = country;
    document.getElementById('feelLike').innerHTML = feels_like;
    document.getElementById('weather').innerHTML = weather;

    document.getElementById('input').value = "";
}