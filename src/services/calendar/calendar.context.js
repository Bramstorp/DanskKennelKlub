import React, { useState, useEffect, createContext } from "react";

import { calendarRequest } from "./calendar.service";

export const CalendarContext = createContext();

import * as firebase from "firebase";

import moment from "moment";

export const CalendarContextProvider = ({ children }) => {
  const [date, setdate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEventLoading, setEventIsLoading] = useState(false);
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

  const setEvent = (date, name, eventName, events) => {
    const dateFormat = date.format(moment.HTML5_FMT.DATE);
    const dateKeyParam = dateFormat;

    if (events.length === 0) {
      events.push({
        [dateFormat]: [{ name: name, eventName: eventName }],
      });
    } else {
      Object.entries(events[0]).forEach(([key]) => {
        if (key === dateKeyParam) {
          events[0][key].push({ name: name, eventName: eventName });
        } else {
          const data = { [dateFormat]: [{ name: name, eventName: eventName }] };
          Object.assign(events[0], data);
        }
      });
    }
    firebase.database().ref("calendar/events").update(events[0]);
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
