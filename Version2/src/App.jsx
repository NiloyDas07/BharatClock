import ClockHeading from "./components/ClockHeading";
import ClockDescription from "./components/ClockDescription";
import CurrentTime from "./components/CurrentTime";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockDescription></ClockDescription>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
