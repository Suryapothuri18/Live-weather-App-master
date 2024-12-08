// import React from "react";
// function Api(){
//     return(
   
//     function convertSecondsToTimeString(seconds) {
//         const date = new Date(seconds * 1000); // Convert seconds to milliseconds
//         const hours = date.getHours().toString().padStart(2, '0');
//         const minutes = date.getMinutes().toString().padStart(2, '0');
//         const secondss = date.getSeconds().toString().padStart(2, '0');
//         return `${hours}:${minutes}:${secondss}`;
//     }

//     const options = {
//         method: "GET",
//         headers: {
//             "X-RapidAPI-Key": "a8383ac6dbmshd5b9ce58c8e9543p15d903jsnab6fc7c864df",
//             "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
//         },
//     };

//     const cityName = document.getElementById("cityName");
//     const cloud_pct = document.getElementById("cloud_pct");
//     const feels_like = document.getElementById("feels_like");
//     const humidity = document.getElementById("humidity");
//     const humidity2 = document.getElementById("humidity2");
//     const max_temp = document.getElementById("max_temp");
//     const min_temp = document.getElementById("min_temp");
//     const sunrise = document.getElementById("sunrise");
//     const sunset = document.getElementById("sunset");
//     const temp = document.getElementById("temp");
//     const temp2 = document.getElementById("temp2");
//     const wind_degrees = document.getElementById("wind_degrees");
//     const wind_speed = document.getElementById("wind_speed");
//     const wind_speed2 = document.getElementById("wind_speed2");

//     const cityInput = document.getElementById("city");
//     const submitButton = document.getElementById("submit");

//     const getWeather = (city) => {
//         cityName.textContent = city;

//         fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
//             .then((response) => response.json())
//             .then((response) => {
//                 console.log(response);

//                 cloud_pct.textContent = response.cloud_pct;
//                 feels_like.textContent = response.feels_like;
//                 humidity.textContent = response.humidity;
//                 humidity2.textContent = response.humidity;
//                 max_temp.textContent = response.max_temp;
//                 min_temp.textContent = response.min_temp;
//                 sunrise.textContent = convertSecondsToTimeString(response.sunrise);
//                 sunset.textContent = convertSecondsToTimeString(response.sunset);
//                 temp.textContent = response.temp;
//                 temp2.textContent = response.temp;
//                 wind_degrees.textContent = response.wind_degrees;
//                 wind_speed.textContent = response.wind_speed;
//                 // wind_speed2.textContent = response.wind_speed;
//             })
//             .catch((err) => console.error(err));
//     };

//     submitButton.addEventListener("click", (e) => {
//         e.preventDefault();
//         getWeather(cityInput.value);
//     });


//     searchForm.addEventListener("submit", (e) => {
//         e.preventDefault();
//         getWeather(cityInput.value);
//     });

        
// )
// }
