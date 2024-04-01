import { Image } from ".";

export const GetWeatherIcon = (state: string, size?: string) => {
  switch (state.toLowerCase()) {
    case "snow":
      return <Image src="/animated/snowy-1.svg" alt="snow" className={size}/>;
    case "rain":
      return <Image src="/animated/rainy-1.svg" alt="rain" className={size}/>;
    case "fog":
      return <Image src="/animated/cloudy.svg" alt="fog" className={size}/>;
    case "wind":
      return <Image src="/animated/weather.svg" alt="wind" className={size}/>;
    case "cloudy":
      return <Image src="/animated/cloudy-day-1.svg" alt="cloud" className={size}/>;
    case "partly-cloudy-day":
      return <Image src="/animated/cloudy-day-1.svg" alt="partly-cloudy-day" className={size}/>;
    case "partly-cloudy-night":
      return (
        <Image src="/animated/cloudy-night-1.svg" alt="partly-cloudy-night" className={size}/>
      );
    case "clear-day":
      return <Image src="/animated/day.svg" alt="clear-day" className={size}/>;
    case "clear-night":
      return <Image src="/animated/night.svg" alt="clear-night" className={size}/>;
  }
};
