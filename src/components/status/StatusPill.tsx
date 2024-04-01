import { FC } from "react";
interface IProps {
  name: string;
  icon: JSX.Element;
  value: string;
}
const StatusPill: FC<IProps> = ({ name, icon, value }) => {
  return (
    <>
      <div className="rounded-full bg-white md:px-8 py-2 w-full max-w-[250px] flex items-center md:justify-center relative ">
        <div className="hidden xs:block absolute left-3 top-1/2 -translate-y-1/2">
          {icon}
        </div>
        <div className="xs:hidden ml-1">{icon}</div>
        <div className="xs:text-center w-full ml-1">
          <h3 className="text-xs md:text-lg text-gray-600 font-semibold capitalize whitespace-nowrap">
            {name}
          </h3>
          <p className="text-xs md:text-sm text-gray-400 font-medium">
            {value}
          </p>
        </div>
      </div>
    </>
  );
};

export default StatusPill;
