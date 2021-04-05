import React, { useState, useEffect, createContext } from "react";

import * as firebase from "firebase";

import moment from "moment";

export const EventsContext = createContext();

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

  const setEvent = (date, name, eventName, starttime, user) => {
    setEventIsLoading(true);
    const dateKeyParam = date;

    if (events.length === 0) {
      events.push({
        [date]: [
          {
            name: name,
            eventName: eventName,
            starttime: starttime,
            date: date,
          },
        ],
      });
    } else {
      Object.entries(events[0]).forEach(([key]) => {
        if (key === dateKeyParam) {
          events[0][key].push({
            name: name,
            eventName: eventName,
            starttime: starttime,
            date: date,
          });
        } else {
          const data = {
            [date]: [
              {
                name: name,
                eventName: eventName,
                starttime: starttime,
                date: date,
              },
            ],
          };
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

  const joinEvents = (user, calendar) => {
    setEvent(
      calendar.date,
      calendar.name,
      calendar.eventName,
      calendar.starttime,
      user.email
    );
  };

  return (
    <EventsContext.Provider
      value={{
        setEvent,
        isEventLoading,
        joinEvents,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
