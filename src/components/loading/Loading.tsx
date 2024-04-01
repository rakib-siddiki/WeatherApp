import { CloudIcon } from "lucide-react";

function Loading() {
  return (
    <>
      <CloudIcon className="size-40 stroke-white mx-auto animate-bounce" />
      <p className="text-center text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-100 font-bold">
        Loading weather...
      </p>
    </>
  );
}

export default Loading;
