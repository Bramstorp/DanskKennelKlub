import React, { useContext, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { SafeArea } from "../../../components/utility/safe-area.component";

import { Calendar } from "../components/calendar";

import * as firebase from "firebase";

export const CalendarScreen = ({ navigation }) => {
  const [date, setDate] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const ref = firebase.database().ref("calendar/events");
      ref.once("value").then((snapshot) => {
        let result = {};
        snapshot.forEach((daySnapshot) => {
          result[daySnapshot.key] = [];
          daySnapshot.forEach((eventSnapshot) => {
            result[daySnapshot.key].push(eventSnapshot.val());
          });
        });
        setDate(result);
      });
    }, [date.date])
  );

  return (
    <SafeArea>
      <Calendar date={date} navigation={navigation} />
    </SafeArea>
  );
};
