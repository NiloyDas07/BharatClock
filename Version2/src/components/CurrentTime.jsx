import { useEffect, useState } from "react";

function CurrentTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
      console.log("cleared");
    };
  }, []);

  const dateOptions = {
    timezone: "India",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const timeOptions = { timezone: "India" };

  return (
    <p className="">
      This is the current time {date.toLocaleTimeString("en-IN", timeOptions)} -{" "}
      {date.toLocaleDateString("en-IN", dateOptions)}
    </p>
  );
}

export default CurrentTime;
