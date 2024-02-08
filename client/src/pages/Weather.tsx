import City from "../components/weather/City";
import Details from "../components/weather/Details";
import Days from "../components/weather/Days";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../constants";

function Weather() {
  const [location, setLocation] = useState({});
  const [tempData, setTempData] = useState({
    temp: null,
    city: null,
    detail: {
      feelsLike: null,
      humidity: null,
      maxTemp: null,
      minTemp: null,
      windSpeed: null,
      type: null,
      visibility: null,
    },
    daily: [],
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const currLocation = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      setLocation(currLocation);
    });
  }, []);

  const loader = useRef(null);
  useEffect(() => {
    if (Object.keys(location).length === 0) {
      return;
    }
    const url = `${BACKEND_URL}/weather/location?lat=${location.lat}&lon=${location.lon}`;
    const token = localStorage.getItem("token");
    axios
      .get(url, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        loader.current.className = "w-[25px]";
        setTempData(response.data.response);
      });
  }, [location]);

  const reloadHandler = (evt) => {
    loader.current.className = "w-[25px] animate-spin";
    navigator.geolocation.getCurrentPosition((position) => {
      const currLocation = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      setLocation(currLocation);
    });
  };

  return (
    <div>
      <div className="flex justify-around m-5 text-darkblue">
        <div>
          <City
            temp={tempData.temp}
            city={tempData.city}
            type={tempData.detail.type}
          />
        </div>

        <div className="flex justify-start items-center cursor-pointer">
          <div className="transition hover:scale-150" onClick={reloadHandler}>
            <img
              className="w-[25px]"
              src="src/assets/refreshLogo.svg"
              alt="refresh"
              ref={loader}
            />
          </div>
        </div>

        <div>
          <Details
            feelsLike={tempData.detail.feelsLike}
            humidity={tempData.detail.humidity}
            maxTemp={tempData.detail.maxTemp}
            minTemp={tempData.detail.minTemp}
            windSpeed={tempData.detail.windSpeed}
            visibility={tempData.detail.visibility}
          />
        </div>
      </div>
      <div>
        <Days data={tempData.daily} />
      </div>
    </div>
  );
}

export default Weather;
