import React, { useState, useEffect, createContext } from "react";

import { calendarRequest } from "./calendar.service";

export const CalendarContext = createContext();

import * as firebase from "firebase";

export const CalendarContextProvider = ({ children }) => {
  const [date, setdate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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

  const setEvent = (dates, id, name, user) => {
    firebase.database().ref(dates).update({
      eventid: id,
      eventName: name,
      userid: user,
    });
  };

  const writeNewPost = (dates, id, name, user) => {
    // A post entry.
    var postData = {
      eventname: name,
      uid: user,
      dates: dates,
      id: id,
    };

    var newPostKey = firebase.database().ref().child("dates").push().key;

    var updates = {};
    updates["/" + dates + "/" + newPostKey] = postData;

    return firebase.database().ref().update(updates);
  };

  const test = (dates) => {
    firebase
      .database()
      .ref(dates)
      .on("value", (snapshot) => {
        console.log(snapshot);
      });
  };

  return (
    <CalendarContext.Provider
      value={{
        isLoading,
        error,
        date,
        setEvent,
        writeNewPost,
        test,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
