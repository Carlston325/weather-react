import axios from "axios";
import { useState } from "react";
import countries from "../db/countries.json";
import IMG from "./IMG";

function App() {
  const APIreq_CurrentWeather = "https://api.weatherbit.io/v2.0/current";
  const API_Key = "bae09d4018e644968e46ed944b1ca373";

  const [userCountry, setUserCountry] = useState("");
  const country = countries[userCountry];
  function handleCountry(e) {
    const value = e.target.value;
    setUserCountry(value);
  }

  const [pickedLocation, setPickedLocation] = useState("");
  function handleLocation(e) {
    const value = e.target.value;
    setPickedLocation(value);
  }

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [weatherData, setWeatherData] = useState({
    dayLook: "No DATA",
    currentTemp: "No Temperature",
    currentLocation: "No Location",
  });
  async function handleSubmit() {
    try {
      const response = await axios.get("http://localhost:3100/" + userCountry);
      const coordinates = response.data[pickedLocation];

      const getWeather = await axios.get(
        APIreq_CurrentWeather +
          "?lat=" +
          coordinates.lat +
          "&lon=" +
          coordinates.lon +
          "&key=" +
          API_Key
      );
      console.log(getWeather.data.data[0]);
      setWeatherData({
        dayLook: getWeather.data.data[0].weather.description,
        currentTemp: getWeather.data.data[0].temp,
        currentLocation: getWeather.data.data[0].city_name,
      });
    } catch (error) {
      console.log(error.response.data);
    }
    setIsSubmitted(true);
  }

  const backgroundIMG = {
    backgroundColor: "grey",
  };
  let weatherIcon = "";
  if (weatherData.dayLook === "Few clouds" || "Partly cloudy") {
    backgroundIMG.backgroundColor = "rgba(0, 183, 255, 0.356)";
    weatherIcon = "./images/partly cloudy.png";
  } else if (
    weatherData.dayLook === "Broken clouds" ||
    "Cloudy" ||
    "Overcast clouds"
  ) {
    backgroundIMG.backgroundColor = "#313969";
    weatherIcon = "./images/cloudy.png";
  } else if (weatherData.dayLook === "Sunny" || "Clear sky") {
    backgroundIMG.backgroundColor = "rgb(255, 252, 99)";
    weatherIcon = "./images/sunny.png";
  } else if (weatherData.dayLook === "Rainy" || "Rain" || "Showers") {
    backgroundIMG.backgroundColor = "rgb(36, 42, 59)";
    weatherIcon = "./images/rain.png";
  } else if (weatherData.dayLook === "Snowing" || "Snow") {
    backgroundIMG.backgroundColor = "rgb(159, 174, 184)";
    weatherIcon = "./images/snow.png";
  } else if (weatherData.dayLook === "Thunder" || "Thunderstorm" || "Storm") {
    backgroundIMG.backgroundColor = "rgb(29, 14, 58)";
    weatherIcon = "./images/thunderstorm.png";
  } else if (weatherData.dayLook === "Windy" || "Strong winds") {
    backgroundIMG.backgroundColor = "rgb(164, 250, 214)";
    weatherIcon = "./images/windy.png";
  }

  return (
    <>
      <div id="announcement">
        <p>
          More <span>countries</span> & <span>locations</span> coming
          soon.......
        </p>
      </div>

      <form className="locationInput" action="/submitLocation">
        <select
          onChange={handleCountry}
          className="w3-select countrySelect"
          name="country"
          value={userCountry}
          placeholder="Pick location..."
        >
          <option value="" disabled selected>
            -- Pick Country --
          </option>
          <option value="unitedKingdom">United Kingdom</option>
          <option value="unitedStates">United States</option>
          {/* <option value="india">India</option> */}
        </select>

        <select
          onChange={handleLocation}
          className="w3-select locationSelect"
          name="location"
          value=""
          placeholder="Pick location..."
        >
          <option value="" disabled selected>
            -- Pick a location --
          </option>
          {userCountry === "unitedKingdom" &&
            country.map((places) => {
              return <option value={places}>{places}</option>;
            })}
          {userCountry === "unitedStates" &&
            country.map((places) => {
              return <option value={places}>{places}</option>;
            })}
          {userCountry === "india" &&
            country.map((places) => {
              return <option value={places}>{places}</option>;
            })}
        </select>

        <input
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          type="submit"
          name="location"
          value="SUBMIT"
        />
      </form>

      <div className="weatherData">
        {isSubmitted ? (
          <div className="currentWeather" style={backgroundIMG}>
            <div>
              <IMG source={weatherIcon} imgDescrip={weatherData.dayLook} />
              <p>{weatherData.dayLook}</p>
            </div>
            <div>
              <h3>
                {weatherData.currentTemp}
                {weatherData.currentTemp === "No Temperature" ? null : (
                  <span>°C</span>
                )}
              </h3>
              <p>{weatherData.currentLocation}</p>
            </div>
          </div>
        ) : (
          <div className="noLocation">
            <h3>
              🫵🫵🫵 <span>Where are you!</span> 🫵🫵🫵
            </h3>
            <p>ENTER A LOCATION ABOVE</p>
          </div>
        )}
        {/* <div className="sevenDays">
          <div>
            <img src="." alt="" />
            <p>tomorrow</p>
          </div>
          <div>
            <img src="." alt="" />
            <p>2nd Day</p>
          </div>
          <div>
            <img src="." alt="" />
            <p>3rd Day</p>
          </div>
          <div>
            <img src="." alt="" />
            <p>4th Day</p>
          </div>
          <div>
            <img src="." alt="" />
            <p>5th Day</p>
          </div>
          <div>
            <img src="." alt="" />
            <p>6th Day</p>
          </div>
          <div>
            <img src="." alt="" />
            <p>7th Day</p>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default App;
