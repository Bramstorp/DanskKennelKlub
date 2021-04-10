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
    const data = {
      name: name,
      eventName: eventName,
      starttime: starttime,
      endtime: endtime,
      date: date,
    };
    const ref = firebase.database().ref("calendar/events/" + date)
    ref.once("value")
    .then(function(snapshot) {
      snapshot.ref.push(data)
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

    const ref = firebase.database().ref(`users/${user.uid}/`)
    ref.push(user_data)

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
