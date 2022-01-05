// create, provide, use
import React, { useState, createContext } from "react";

export const TimerContext = createContext();

export const TimerProvider = ( props ) => {
  const [timers, setTimer] = useState([
    { name: "Harry poter", description: 12 },
    { name: "GOT", description: 120 },
    { name: "New movie", description: 45 },
    { name: "Spyder man", description: 20 },
  ]);
  return(
      <TimerContext.Provider value={[timers, setTimer]}>
          {props.children}
      </TimerContext.Provider>
  );
};
