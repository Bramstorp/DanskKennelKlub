import React, { useState, useEffect, createContext } from "react";

import { eventsRequest } from "./events.service";

export const EventsContext = createContext();

export const EventsContextProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    eventsRequest()
      .then((results) => {
        setIsLoading(false);
        setEvents(results);
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
        events,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
