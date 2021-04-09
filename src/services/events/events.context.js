import React, { useState, useEffect, createContext } from "react";

import * as firebase from "firebase";

export const EventsContext = createContext();

export const EventsContextProvider = ({ children }) => {
  const [isEventLoading, setEventIsLoading] = useState(false);
  const [eventsList, setEventsList] = useState([]);

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
        setEventsList(values);
      });
  }, []);

  const setEvent = (date, name, eventName, starttime, endtime) => {
    setEventIsLoading(true);
    const dateKeyParam = date;

    if (eventsList.length === 0) {
      eventsList.push({
        [date]: [
          {
            name: name,
            eventName: eventName,
            starttime: starttime,
            endtime: endtime,
            date: date,
          },
        ],
      });
    } else {
      Object.entries(eventsList[0]).forEach(([key]) => {
        if (key === dateKeyParam) {
          eventsList[0][key].push({
            name: name,
            eventName: eventName,
            starttime: starttime,
            endtime: endtime,
            date: date,
          });
        } else {
          const data = {
            [date]: [
              {
                name: name,
                eventName: eventName,
                starttime: starttime,
                endtime: endtime,
                date: date,
              },
            ],
          };
          Object.assign(eventsList[0], data);
        }
      });
    }
    firebase
      .database()
      .ref("calendar/events")
      .update(eventsList[0])
      .then(function () {
        setEventIsLoading(false);
        setEventsList([]);
      });
  };

  const joinEvents = (user, calendar) => {
    const user_data = {
      name: calendar.name,
      eventName: calendar.eventName,
      starttime: calendar.starttime,
      endtime: calendar.endtime,
      date: calendar.date,
      user: user.email,
    };

    const ref = firebase.database().ref("users/" + user.uid)
    ref.update([user_data])

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
