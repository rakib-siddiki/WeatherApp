import { FC } from "react";
import { Icons } from "../../core";
import StatusPill from "./StatusPill";

interface IProps {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  clouds: { all: number };
  weather: { main: string; description: string }[];
}
const StatusWrapper: FC<IProps> = ({ main, wind, clouds, weather }) => {
  return (
    <div className="grid grid-cols-2 sm:flex flex-wrap justify-center items-center gap-6 size-full mb-6">
      <StatusPill
        name="Temp"
        icon={<Icons.Temp />}
        value={`${Math.round(main?.temp) || 28}°C`}
      />
      <StatusPill
        name="Wind"
        icon={<Icons.Wind />}
        value={`${wind?.speed || 0}km/h`}
      />
      <StatusPill
        name="Humidity"
        icon={<Icons.Humidity />}
        value={`${Math.round(main?.humidity) || 28}%`}
      />
      <StatusPill
        name="Wind Derection"
        icon={<Icons.WindDerection />}
        value={`${wind?.speed || 0}km/h`}
      />
      <StatusPill
        name="Cloud Cover"
        icon={<Icons.CloudCover />}
        value={`${clouds?.all || 0}%`}
      />
      <StatusPill
        name="pressure"
        icon={<Icons.Precipitation />}
        value={`${main?.pressure || 0}hpa`}
      />
      <StatusPill
        name="condition"
        icon={<Icons.Condition />}
        value={`${(weather && weather[0]?.main) || "clear-day"}`}
      />
    </div>
  );
};

export default StatusWrapper;
