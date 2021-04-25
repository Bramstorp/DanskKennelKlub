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

    firebase.database().ref(`users/${user.uid}/`).push(user_data)
  };

  const removeEventFromUser = (user, events) => {
    firebase
      .database()
      .ref(`users/${user.uid}/`)
      .orderByChild("eventName")
      .equalTo(events.eventName)
      .on("value", function (snapshot) {
        snapshot.forEach(function (data) {
          data.ref.remove()
        });
      });
  };

  const removeEvent = (events) => {
    firebase
      .database()
      .ref(`calendar/events/${events.date}/`)
      .orderByChild("eventName")
      .equalTo(events.eventName)
      .on("value", function (snapshot) {
        snapshot.ref.remove()
      });
  };


  return (
    <EventsContext.Provider
      value={{
        setEvent,
        isEventLoading,
        joinEvents,
        removeEventFromUser,
        removeEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
