import React, { useState, useEffect, createContext } from "react";

import * as firebase from "firebase";

export const CalendarContext = createContext();

export const CalendarContextProvider = ({ children }) => {
  const [date, setDate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const ref = firebase.database().ref("calendar/events");
    ref.once("value").then((snapshot) => {
      let result = {};
      snapshot.forEach((daySnapshot) => {
        result[daySnapshot.key] = [];
        daySnapshot.forEach((eventSnapshot) => {
          result[daySnapshot.key].push(eventSnapshot.val());
        });
      });
      setDate(result)
    });
  }, [true])

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
