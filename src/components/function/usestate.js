import { useState } from "react";

const Timer = () => {
  const [count, setcount] = useState(0);

  const action = (act) => {
    switch (act) {
      case "start":
        setInterval(() => {
          setcount((count) => count + 1);
        }, 1000);
        break;
      case "stop":
        clearInterval();
        break;
      case "reset":
        clearInterval()
        setcount(0);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => action("start")}>Start</button>
      <button onClick={() => action("stop")}>Stop</button>
      <button onClick={() => action("reset")}>Reset</button>
    </>
  );
};

export default Timer;
