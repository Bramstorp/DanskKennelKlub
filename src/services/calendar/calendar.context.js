import React, { useState, useEffect, createContext } from "react";

import { calendarRequest } from "./calendar.service";

export const CalendarContext = createContext();

export const CalendarContextProvider = ({ children }) => {
  const [date, setdate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    calendarRequest()
      .then((results) => {
        setIsLoading(false);
        setdate(results);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, []);


  return (
    <CalendarContext.Provider
      value={{
        isLoading,
        error,
        date
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};