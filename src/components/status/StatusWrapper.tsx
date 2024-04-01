import { Icons } from "../../core";
import StatusPill from "./StatusPill";

const StatusWrapper = () => {
  return (
    <div className="grid grid-cols-2 sm:flex flex-wrap justify-center items-center gap-6 size-full">
      <StatusPill name="Temp" icon={<Icons.Temp />} value="32°C" />
      <StatusPill name="Wind" icon={<Icons.Wind />} value="14.4km/h" />
      <StatusPill name="Humidity" icon={<Icons.Humidity />} value="32.5%" />
      <StatusPill
        name="Wind Derection"
        icon={<Icons.WindDerection />}
        value="14.4km/h"
      />
      <StatusPill
        name="Cloud Cover"
        icon={<Icons.CloudCover />}
        value="32.5%"
      />
      <StatusPill
        name="Precipitation"
        icon={<Icons.Precipitation />}
        value="0%"
      />
      <StatusPill
        name="condition"
        icon={<Icons.Condition />}
        value="pertty cloudy"
      />
    </div>
  );
};

export default StatusWrapper;
