import { useEffect, useState } from "react";
import {
  Loading,
  StatusWrapper,
  TheHeader,
  Waves,
  Weather,
} from "./components";
import { GetWeatherIcon, iconMap } from "./core";
import { useQuery } from "@tanstack/react-query";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState<string | null>(null);

  const WEATHER_APP_API_KEY = "701f918d3ce26a54822be27eff12e773";
  const WEATHER_APP_URL = "https://api.openweathermap.org/data/2.5";
    
  const [lat, lon] = location?.split(",") || [];
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude},${longitude}`);
        },
        (error) => console.error(error)
      );
    }
  }, []);

  const getWeather = async () => {
    try {
      const weather = await fetch(
        `${WEATHER_APP_URL}/weather?q=${searchQuery}&appid=${WEATHER_APP_API_KEY}&units=metric&lat=${lat}&lon=${lon}`
      );
      const res = await weather.json();
      const numbers = res.weather[0].icon.slice(0, 2);
      const dayOrNight = res.weather[0].icon.length > 2 ? res.weather[0].icon.slice(2, 3) : "";
      const icon = iconMap[numbers + dayOrNight];
      return { ...res, icon };
    } catch (error) {
      return;
    }
  };

  const { isPending, isError, data } = useQuery({
    queryKey: ["weather", searchQuery, location],
    queryFn: getWeather,
    staleTime: 20000,
  });
  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-20 min-h-dvh md:p-5">
        <div className="absolute w-full px-10 top-5">
          <TheHeader setSearchQuery={setSearchQuery} />
        </div>
        {isPending ? (
          <div>
            <Loading />
          </div>
        ) : isError ? (
          <div>
            <h1 className="mb-8 text-3xl font-bold text-gray-700 font-pt">
              Something went wrong
            </h1>
          </div>
        ) : (
          <>
            {data?.icon && GetWeatherIcon(data.icon)}
            <h1 className="mb-8 text-3xl font-bold text-gray-700 font-pt">
              {data?.name}
              {data?.country}
            </h1>
            <StatusWrapper {...data} />
            <Weather {...data} />
            <Waves />
          </>
        )}
      </div>
    </>
  );
};

export default App;
