import React, { useState, useEffect, createContext } from "react";

import { eventsRequest } from "./events.service";

export const EventsContext = createContext();

export const EventsContextProvider = ({ children }) => {
  const [date, setdate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    eventsRequest()
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
    <EventsContext.Provider
      value={{
        isLoading,
        error,
        date,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
