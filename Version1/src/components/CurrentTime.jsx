function CurrentTime() {
  const date = new Date();
  const dateOptions = {
    timezone: "India",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const timeOptions = { timezone: "India" };
  const time = date.toLocaleTimeString("en-IN", timeOptions);

  return (
    <p className="">
      This is the current time {time},{" "}
      {date.toLocaleDateString("en-IN", dateOptions)}
    </p>
  );
}

export default CurrentTime;
