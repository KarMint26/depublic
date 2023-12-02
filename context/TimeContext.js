"use client";

import React from "react";

export const TimeContext = React.createContext();

export const TimeProvider = ({ children }) => {
  const [timeLeft, setTimeLeft] = React.useState(1800);

  const countdown = () => {
    setTimeLeft(timeLeft - 1);
  };

  const handleStartTime = () => {
    setTimeLeft(1800);
  }

  React.useEffect(() => {
    const intervalId = setInterval(countdown, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <TimeContext.Provider value={{ timeLeft, handleStartTime }}>{children}</TimeContext.Provider>
  );
};

export const getTimeLeft = () => {
  return React.useContext(TimeContext);
};
