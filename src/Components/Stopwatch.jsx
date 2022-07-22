import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRef } from "react";

const Stopwatch = ({ msToTime }) => {
  const [timer, setTimer] = useState(1000);
  const timerRef = useRef();

  const startWatch = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        return setTimer((prev) => prev + 100);
      }, 100);
    }
  };
  const pausetWatch = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetWatch = () => {
    pausetWatch();
    setTimer(0);
  };

  function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return (
      hours +
      "hr " +
      ":" +
      minutes +
      "m " +
      ":" +
      seconds +
      "." +
      milliseconds +
      "s"
    );
  }
  function displayTime(time) {
    var minutes = "0" + Math.floor(time / 60);
    var seconds = "0" + (time - minutes * 60);
    return minutes.substr(-2) + "m" + " : " + seconds.substr(-2) + "s";
  }


  return (
    <div>
      <div>
        <h3>Stopwatch </h3>
        <h2>{msToTime(timer)}</h2>
      </div>
      <Button onClick={startWatch}>Start</Button>
      <Button onClick={pausetWatch}>Pause</Button>
      <Button  onClick={resetWatch}>Reset</Button>
    </div>
  );
};

export default Stopwatch;
