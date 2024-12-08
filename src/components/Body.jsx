import React from "react";

function Body(){
    return (
        <main>
        <h1>
          Weather for <span id="cityName"></span>
        </h1>
        <div className="cards">
          <div className="cardTemp">
            <div className="cardHeading">
              <h2>Temperature</h2>
              {/* <hr /> */}
            </div>
            <div id="cardBody">
              <h1>
                <span id="temp2"></span>
                <sup> °</sup>C
              </h1>
              <ul>
                <li>
                  Temperature : <span id="temp"></span>
                  <sup>°</sup>C
                </li>
                <li>
                  Min Temperature : <span id="min_temp"></span>
                  <sup>°</sup>C
                </li>
                <li>
                  Max Temperature : <span id="max_temp"></span>
                  <sup>°</sup>C
                </li>
              </ul>
            </div>
          </div>
          <div className="cardHumidity">
            <div className="cardHeading">
              <h2>Humidity Info</h2>
              {/* <hr /> */}
            </div>
            <div id="cardBody">
              <h1>
                <span id="humidity2"></span> %
              </h1>
              <ul>
                <li>
                  Cloud PCT : <span id="cloud_pct"></span>
                </li>
                <li>
                  Feels like : <span id="feels_like"></span>
                </li>
                <li>
                  Humidity : <span id="humidity"></span>%
                </li>
              </ul>
            </div>
          </div>
          <div className="cardWind">
            <div className="cardHeading">
              <h2>Wind Info</h2>
              {/* <hr /> */}
            </div>
            <div id="cardBody">
              <h1>
                <span id="wind_speed"></span> m/s
              </h1>
              <ul>
                <li>
                  Wind degrees : <span id="wind_degrees"></span>
                  <sup>°</sup>
                </li>
                <li>
                  Sunrise : <span id="sunrise"></span>
                </li>
                <li>
                  Sunset : <span id="sunset"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    
    )
}

export default Body;