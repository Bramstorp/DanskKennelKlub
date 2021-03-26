import React, { useContext, useEffect, useState } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { CalendarContext } from "../../../services/calendar/calendar.context";
import { EventsContext } from "../../../services/events/events.context";
import EventCalendar from "react-native-events-calendar";
import { Dimensions, View, Text, TouchableOpacity } from "react-native";

import * as firebase from "firebase";

let { width } = Dimensions.get("window");

export const CalendarScreen = ({ navigation }) => {
  const { isLoading, date } = useContext(CalendarContext);
  const { events } = useContext(EventsContext);
  // const [events, setEvents] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref("calendar/events/")
      .once("value")
      .then((snapshot) => {
        let values = [];
        snapshot.forEach((child) => {
          values.push(child.val());
        });
        setEvents(values);
      });
  }, []);

  return (
    <SafeArea>
      <EventCalendar
        events={events}
        width={width}
        format24h
        eventTapped={(event) =>
          navigation.navigate("CalendarDetail", {
            calendar: event,
          })
        }
        initDate={"2021-02-04"}
      />
    </SafeArea>
  );
};
