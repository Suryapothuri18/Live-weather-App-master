import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';

ReactDOM.render(
  <App />, document.getElementById("root")
);

function convertSecondsToTimeString(seconds) {
  const date = new Date(seconds * 1000); // Convert seconds to milliseconds
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const secondss = date.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${secondss}`;
}

// Replace with your OpenWeatherMap API key
const API_KEY = '48a5ec8ec0a7422f3e68776ae0800e3d';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const cityName = document.getElementById("cityName");
const cloud_pct = document.getElementById("cloud_pct");
const feels_like = document.getElementById("feels_like");
const humidity = document.getElementById("humidity");
const humidity2 = document.getElementById("humidity2");
const max_temp = document.getElementById("max_temp");
const min_temp = document.getElementById("min_temp");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const temp = document.getElementById("temp");
const temp2 = document.getElementById("temp2");
const wind_degrees = document.getElementById("wind_degrees");
const wind_speed = document.getElementById("wind_speed");
const wind_speed2 = document.getElementById("wind_speed2");

const cityInput = document.getElementById("city");
const submitButton = document.getElementById("submit");

const getWeather = (city) => {
  cityName.textContent = city;

  // Modify the fetch URL for OpenWeatherMap
  fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)  // Units in metric for Celsius
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.textContent = response.clouds.all;
      feels_like.textContent = response.main.feels_like;
      humidity.textContent = response.main.humidity;
      humidity2.textContent = response.main.humidity;
      max_temp.textContent = response.main.temp_max;
      min_temp.textContent = response.main.temp_min;
      sunrise.textContent = convertSecondsToTimeString(response.sys.sunrise);
      sunset.textContent = convertSecondsToTimeString(response.sys.sunset);
      temp.textContent = response.main.temp;
      temp2.textContent = response.main.temp;
      wind_degrees.textContent = response.wind.deg;
      wind_speed.textContent = response.wind.speed;
    })
    .catch((err) => console.error("Error fetching weather data:", err));
};

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(cityInput.value);
});

const searchForm = document.getElementById("searchForm");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeather(cityInput.value);
});
