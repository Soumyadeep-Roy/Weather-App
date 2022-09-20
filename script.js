const apikey = 'Enter your Your API key';
let searchbutton = document.querySelector('.btn');

searchbutton.addEventListener('click', (e) => {
  let cityname = document.querySelector('.inputvalue').value;
  if(cityname == "") {
    alert("Enter a city name");
  }
  else {
    fetchweather(cityname);
  }
});

function fetchweather(cityname) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${apikey}`)
  .then(response => response.json())
  .then(data => {
    display(data);
  })
  .catch((error) => handlerror());
}


function display(data) {
  const { name } = data;
  const { main } = data.weather[0];
  const { temp } = data.main;
  const { country } = data.sys;
  const { icon } = data.weather[0];
  const { humidity } = data.main;
  const { speed } = data.wind;
  document.getElementById('location').innerText = name + ", " + country;
  document.getElementById('temperature').innerText = temp +" °C";
  document.getElementById('icon').src = `http://openweathermap.org/img/wn/${icon}.png`;
  document.getElementById('description').innerText = main;
  document.getElementById('humidity').innerText = "Humidity: " + humidity + "%";
  document.getElementById('wind-speed').innerText = "Wind Speed: " + Math.round(speed*(18/5)) + " km/h";
  document.getElementById('visibility').innerText = "Visibility: " + (data.visibility/1000) + " km";
}

function handlerror() {
  alert("Enter a valid city name");
}

fetchweather("Delhi");