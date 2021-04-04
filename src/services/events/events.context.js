import React, { useState, useEffect, createContext } from "react";

import { eventsRequest } from "./events.service";

export const EventsContext = createContext();

import * as firebase from "firebase";

import moment from "moment";

export const EventsContextProvider = ({ children }) => {
  const [isEventLoading, setEventIsLoading] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref("calendar")
      .once("value")
      .then((snapshot) => {
        let values = [];
        snapshot.forEach((child) => {
          values.push(child.val());
        });
        setEvents(values);
      });
  }, []);

  const setEvent = (date, name, eventName) => {
    setEventIsLoading(true);
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
    firebase
      .database()
      .ref("calendar/events")
      .update(events[0])
      .then(function () {
        setEventIsLoading(false);
      });
  };

  return (
    <EventsContext.Provider
      value={{
        setEvent,
        isEventLoading,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
