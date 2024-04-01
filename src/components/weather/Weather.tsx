import { useState } from "react";
import { GetWeatherIcon, getTodaysDate } from "../../core";

const Weather = ({ ...props }) => {
  const [c, setC] = useState(true);
  const { weather, main, wind, icon } = props;
  const celsius = Math.round(main?.temp);
  const fahrenheit = Math.round((main?.temp * 9) / 5 + 32);
  return (
    <>
      <div className="max-w-sm p-10 text-center bg-white shadow-xl rounded-xl">
        <p className="mb-1 text-3xl font-bold text-gray-700 font-pt">
          {getTodaysDate()}
        </p>
        <p className="mb-2 text-sm text-gray-500">
          Today's {weather && weather[0].description} weather
        </p>
        <div className="relative flex items-start justify-center gap-4">
          <div className="absolute -left-8 top-0 !size-16">
            {GetWeatherIcon(icon, "!size-16")}
          </div>
          <p className="text-6xl font-bold text-gray-700 font-pt">
            {c ? celsius : fahrenheit}°
          </p>
          <div className="text-2xl font-medium text-gray-400 cursor-pointer">
            <p
              className={`${c && "text-gray-600 font-bold"}`}
              onClick={() => setC(true)}
            >
              °C
            </p>
            <p
              className={`${!c && "text-gray-600 font-bold"}`}
              onClick={() => setC(false)}
            >
              °F
            </p>
          </div>
        </div>
        <p className="text-sm font-bold text-gray-500 capitalize">
          min: <span className="font-pt">{c ? celsius : fahrenheit}°C </span>/
          max:
          <span className="font-pt"> {c ? celsius : fahrenheit}°C</span>
        </p>
        <div className="flex items-center justify-center gap-5 text-lg font-semibold text-gray-500 ">
          <div>
            <p>Temp</p>
            <span className="inline-block text-sm font-semibold text-gray-500 font-pt">
              {c ? celsius : fahrenheit}°
            </span>
          </div>
          <div>
            <p>Wind</p>
            <span className="inline-block text-sm font-semibold text-gray-500 font-pt">
              {wind?.speed || 0}km/h
            </span>
          </div>
          <div>
            <p>Humidity</p>
            <span className="inline-block text-sm font-semibold text-gray-500 font-pt">
              {Math.round(main?.humidity) || 28}°%
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
