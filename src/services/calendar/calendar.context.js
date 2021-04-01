import React, { useState, useEffect, createContext } from "react";

import * as firebase from "firebase";

export const CalendarContext = createContext();

export const CalendarContextProvider = ({ children }) => {
  const [date, setDate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    firebase
      .database()
      .ref("calendar")
      .once("value")
      .then((snapshot) => {
        let values = [];
        snapshot.forEach((child) => {
          values.push(child.val());
        });
        setDate(values);
        setIsLoading(false);
      });
  }, []);

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
