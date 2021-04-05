import React, { useState, useEffect, createContext } from "react";

import * as firebase from "firebase";

import { useFocusEffect } from "@react-navigation/native";

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

  const setEvent = (date, name, eventName, starttime, endtime, user) => {
    setEventIsLoading(true);
    const dateKeyParam = date;

    if (events.length === 0) {
      events.push({
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
      Object.entries(events[0]).forEach(([key]) => {
        if (key === dateKeyParam) {
          events[0][key].push({
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
    var ref = firebase.database().ref("user/events/" + user.uid);
    ref.once("value", function (snapshot) {
      console.log(snapshot.key);
    });
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
