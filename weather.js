let temp = document.getElementById('temp');
let city = document.getElementById('city');
let condition = document.getElementById('condition');
let btn = document.getElementsByClassName('btn')[0];
let weatherIcon = document.getElementById('weatherIcon');

btn.onclick = function () {
    const cityInput = document.getElementById('cityInput').value ;
    const apiKey = "c6d05a8e3a5f19a7720d1e2c6b8f0397"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            temp.innerHTML = (data.main.temp - 273.15).toFixed(1) + "°C";
            city.innerHTML = data.name;
            condition.innerHTML = data.weather[0].description;
            // weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        })
        .catch(err => console.error(err));
};



// let temp = document.getElementById('temp');
// let city = document.getElementById('city');
// let condition = document.getElementById('condition');
// let btn = document.getElementsByClassName('btn')[0];

// btn.onclick = function () {
//     fetch("https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=c6d05a8e3a5f19a7720d1e2c6b8f0397")
//         .then(res => res.json())
//         .then(data => {
//             temp.innerHTML = data.temp;
//             city.innerHTML = data.name;
//             // condition.innerHTML = data.current.condition.text;
//         })
//         .catch(err => console.error(err));
// }