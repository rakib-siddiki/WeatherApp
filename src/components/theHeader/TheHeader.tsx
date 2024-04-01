import { FC, KeyboardEvent } from "react";
import { Icons } from "../../core";
interface IProps {
    setSearchQuery: (value: string) => void
}
const TheHeader:FC<IProps> = ({setSearchQuery}) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchQuery(e.currentTarget.value);
    }
  };
  return (
    <div className="w-full sm:flex items-center justify-between">
      <h2 className=" max-sm:text-center max-sm:mb-3 text-2xl  sm:text-3xl font-bold text-gray-700">
        Weather App
      </h2>
      <div className="relative">
        <input
          type="search"
          className="text-gray-500 font-medium capitalize rounded-full px-6 py-2 outline-none border-none focus:ring-2 focus:ring-offset-emerald-300 transition duration-300 w-full"
          placeholder="Search your city"
          onKeyDown={handleKeyDown}
        />
        <Icons.Search className="absolute right-3 top-1/2  -translate-y-1/2 size-5 stroke-gray-500" />
      </div>
    </div>
  );
};

export default TheHeader;
