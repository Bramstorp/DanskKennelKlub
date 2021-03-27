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

  const setEvent = (date, name, test) => {
    let arrayTest = test;
    const keyParam = date;

    Object.entries(arrayTest[0]).forEach(([key]) => {
      if (key === keyParam) {
        arrayTest[0][key].push({ id: 4, name: date });
      }
    });

    JSON.parse(JSON.stringify(arrayTest));
    console.log(arrayTest);

    firebase.database().ref("calendar/events").update(arrayTest[0]);
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
