import React from "react";
import { BiReset } from "react-icons/bi";
import { FaPause, FaPlay } from "react-icons/fa";
import { RxResume } from "react-icons/rx";

const Stopwatch: React.FC = () => {
  let timeInterval: number | undefined = undefined;
  const [time, setTime] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  React.useEffect(() => {
    if (isRunning) {
      timeInterval = setInterval(
        () => setTime((prevTime) => prevTime + 1),
        1000,
      );
    }
    return () => clearInterval(timeInterval);
  }, [isRunning]);
  return (
    <div className="flex items-center justify-center gap-3 p-1">
      {!isRunning && time > 0 && (
        <button onClick={() => setTime(0)}>
          <BiReset className="size-6" />
        </button>
      )}
      <p className="text-3xl font-bold">
        {Math.floor(time / 3600)}:{Math.floor((time % 3600) / 60)}:{time % 60}
      </p>
      {isRunning ? (
        <button onClick={() => setIsRunning(false)}>
          <FaPause className="size-4" />
        </button>
      ) : time > 0 ? (
        <div className="flex gap-2">
          <button onClick={() => setIsRunning(true)}>
            <RxResume className="size-6" />
          </button>
        </div>
      ) : (
        <button onClick={() => setIsRunning(true)}>
          <FaPlay className="size-4" />
        </button>
      )}
    </div>
  );
};
export default Stopwatch;