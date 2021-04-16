import React, { useState, useEffect, createContext } from "react";

export const CalendarContext = createContext();

export const CalendarContextProvider = ({ children }) => {
  const [date, setDate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <CalendarContext.Provider
      value={{
        isLoading,
        date,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
