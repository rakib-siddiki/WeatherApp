import { ChangeEvent, FC, useRef } from "react";
import { Icons } from "../../core";
interface IProps {
  setSearchQuery: (value: string) => void;
}
const TheHeader: FC<IProps> = ({ setSearchQuery }) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    timer.current = setTimeout(() => {
      setSearchQuery(e.target.value);
    }, 600);
  };
  return (
    <div className="items-center justify-between w-full sm:flex">
      <h2 className="text-2xl font-bold text-transparent  max-sm:text-center max-sm:mb-3 sm:text-3xl bg-clip-text bg-gradient-to-r from-white to-yellow-200">
        Weather App
      </h2>
      <div className="relative">
        <input
          type="search"
          className="w-full px-6 py-2 font-medium text-gray-500 capitalize transition duration-300 border-none rounded-full outline-none focus:ring-2 focus:ring-offset-emerald-300 peer"
          placeholder="Search your city"
          onChange={handleChange}
        />
        <Icons.Search className="absolute -translate-y-1/2 right-3 top-1/2 size-5 stroke-gray-500 peer-focus:hidden" />
      </div>
    </div>
  );
};

export default TheHeader;
