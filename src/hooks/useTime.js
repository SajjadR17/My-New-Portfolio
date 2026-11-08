import { useEffect, useState } from "react";

const getIranTime = () =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Tehran",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());

export const useIranTime = () => {
  const [time, setTime] = useState(getIranTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getIranTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
};
