import { useContext, useState } from "react";
import Timer from "./Timer";
import { TimerContext } from "./TimerContext";
import "./style.css";

function TimerList() {
  const [timers, setTimer] = useContext(TimerContext);
  return (
    <div>
        {/* <h1>{value}</h1> */}
      {timers.map((timer) => (
        <Timer name = {timer.name} description = {timer.description}/>
      ))}
    </div>
  );
}

export default TimerList;
