import { Image } from "../../core";

const Weather = () => {
  return (
    <>
      <div className="bg-white rounded-xl p-10 max-w-sm text-center shadow-xl">
        <p className="text-3xl text-gray-700 font-bold mb-3 font-pt">
          March 30, 2024
        </p>
        <div className="flex items-start justify-center gap-4 relative">
          <Image
            src="/animated/cloudy-day-1.svg"
            alt="weather"
            className="absolute -left-8 top-0 !size-16"
          />
          <p className="text-6xl text-gray-700 font-bold font-pt">93.0</p>
          <div className="text-2xl text-gray-400 font-medium">
            <p>°C</p>
            <p>°F</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 font-bold capitalize">
          min: <span className="font-pt">89.0 </span>/ max:
          <span className="font-pt"> 90 </span>
        </p>
        <div className="flex items-center justify-center gap-5 text-lg font-semibold text-gray-500 ">
          <div>
            <p>Temp</p>
            <span className="inline-block text-gray-500 text-sm font-pt font-semibold">
              32°C
            </span>
          </div>
          <div>
            <p>Wind</p>
            <span className="inline-block text-gray-500 text-sm font-pt font-semibold">
              14.4km/h
            </span>
          </div>
          <div>
            <p>Humidity</p>
            <span className="inline-block text-gray-500 text-sm font-pt font-semibold">
              32.5%
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
