import { useState } from "react";
import { StatusWrapper, TheHeader, Waves, Weather } from "./components";
import { Image } from "./core";
const getWeatherIcon = (state: string) => {
  switch (state.toLowerCase()) {
    case "snow":
      return <Image src="/animated/snowy-1.svg" alt="snow" />;
    case "rain":
      return <Image src="/animated/rainy-1.svg" alt="rain" />;
    case "fog":
      return <Image src="/animated/cloudy.svg" alt="fog" />;
    case "wind":
      return <Image src="/animated/weather.svg" alt="wind" />;
    case "cloudy":
      return <Image src="/animated/cloudy-day-1.svg" alt="cloud" />;
    case "partly-cloudy-day":
      return <Image src="/animated/cloudy-day-1.svg" alt="partly-cloudy-day" />;
    case "partly-cloudy-night":
      return (
        <Image src="/animated/cloudy-night-1.svg" alt="partly-cloudy-night" />
      );
    case "clear-day":
      return <Image src="/animated/day.svg" alt="clear-day" />;
    case "clear-night":
      return <Image src="/animated/night.svg" alt="clear-night" />;
  }
};
const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <>
      <div className="min-h-dvh flex flex-col items-center justify-center py-20 md:p-10 px-6 space-y-6">
        <div className="w-full absolute top-5 px-10">
          <TheHeader setSearchQuery={setSearchQuery} />
        </div>
        {getWeatherIcon("rain")}
        <StatusWrapper />
        <Weather />
        <Waves />
      </div>
    </>
  );
};

export default App;
