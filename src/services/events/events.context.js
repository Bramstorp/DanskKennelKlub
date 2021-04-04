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

  const setEvent = (date, name, eventName, starttime) => {
    setEventIsLoading(true);
    const dateFormat = date.format(moment.HTML5_FMT.DATE);
    const dateKeyParam = dateFormat;

    const start = `${starttime.getUTCHours()}:${starttime.getMinutes()}`;

    if (events.length === 0) {
      events.push({
        [dateFormat]: [
          {
            name: name,
            eventName: eventName,
            starttime: start,
            date: dateFormat,
          },
        ],
      });
    } else {
      Object.entries(events[0]).forEach(([key]) => {
        if (key === dateKeyParam) {
          events[0][key].push({
            name: name,
            eventName: eventName,
            starttime: start,
            date: dateFormat,
          });
        } else {
          const data = {
            [dateFormat]: [
              {
                name: name,
                eventName: eventName,
                starttime: start,
                date: dateFormat,
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
    console.log(user.email);
    console.log(calendar.date);
    firebase
      .database()
      .ref("calendar/events/" + calendar.date)
      .update("test");
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
