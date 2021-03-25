import React, { useContext } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { CalendarContext } from "../../../services/calendar/calendar.context";
import { EventsContext } from "../../../services/events/events.context";
import EventCalendar from "react-native-events-calendar";
import { Dimensions, View, Text, TouchableOpacity } from "react-native";

let { width } = Dimensions.get("window");

export const CalendarScreen = ({ navigation }) => {
  const { isLoading, date } = useContext(CalendarContext);
  const { events } = useContext(EventsContext);

  const renderItem = () => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("CalendarDetail", {
            calendar: events,
          })
        }
      >
        <Text>{events.title}</Text>
        <Text>Person Navn</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeArea>
      <EventCalendar
        events={events}
        width={width}
        format24h
        eventTapped={(event) =>
          navigation.navigate("CalendarDetail", {
            event: event,
          })
        }
        initDate={"2021-02-04"}
      />
    </SafeArea>
  );
};
