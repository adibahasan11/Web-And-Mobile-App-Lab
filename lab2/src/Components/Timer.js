import { TimerContext } from "./TimerContext";
import { useContext } from "react";
import "./style.css";

function Timer(props) {
  const [timers, setTimer] = useContext(TimerContext);

  return (
    <div className="timer">
      <h4>{ props.name }</h4>
      <p>{ props.description }</p>
      { timers.map(timer => <li>{timer.description}</li>) }
    </div>
  );
}

export default Timer;