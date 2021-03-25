import React, { useState, useEffect, createContext } from "react";

import { calendarRequest } from "./calendar.service";

export const CalendarContext = createContext();

import * as firebase from "firebase";

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

  const setEvent = (title, summary, start, end, userid) => {
    firebase.database().ref("events").update({
      title: title,
      summary: summary,
      start: start,
      end: end,
      userid: userid,
    });
  };

  return (
    <CalendarContext.Provider
      value={{
        isLoading,
        error,
        date,
        setEvent,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
