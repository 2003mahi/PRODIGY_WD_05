// selector variable
var inputval = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');

// Get your own free OWM API key at https://www.openweathermap.org/appid - please do not re-use mine!
// You don't need an API key for this to work at the moment, but this will change eventually.
var apik = "3045dd712ffe6e702e3245525ac7fa38";

// kelvin to Celsius
function convertion(val) {
    return (val - 273).toFixed(2);
}

// fetch
btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var weatherDescription = data['weather'][0]['description'];
            var temperature = data['main']['temp'];
            var windSpeed = data['wind']['speed'];

            city.innerHTML = `City: ${nameval}`;
            temp.innerHTML = `Temperature: ${convertion(temperature)} C`;
            description.innerHTML = `Conditions: ${weatherDescription}`;
            wind.innerHTML = `Wind Speed: ${windSpeed} km/h`;

        })
        .catch(err => alert('You entered the wrong city name'));
});
