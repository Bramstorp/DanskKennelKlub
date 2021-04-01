import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { EventCard, EmptyDate } from "../components/calendar-style";
import { Agenda } from "react-native-calendars";
import { Text } from "../../../components/typography/text.component";

import * as firebase from "firebase";

export const CalendarScreen = ({ navigation }) => {

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

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("CalendarDetail", {
            calendar: item,
          })
        }
      >
        <EventCard>
          <Text>
            {item.starttime} - {item.endtime}
          </Text>
          <Spacer size="medium">
            <Text>{item.name}</Text>
          </Spacer>
          <Spacer size="medium">
            <Text>Person Navn</Text>
          </Spacer>
        </EventCard>
      </TouchableOpacity>
    );
  };

  const emptyDate = () => {
    return (
      <EmptyDate>
        <Text>This is empty date!</Text>
      </EmptyDate>
    );
  };

  const emptyData = () => {
    return (
      <EmptyDate>
        <Text>This is empty date!</Text>
      </EmptyDate>
    );
  };

  return (
    <SafeArea>
      <Agenda
        items={events[0]}
        renderItem={renderItem}
        pastScrollRange={5}
        futureScrollRange={5}
        renderEmptyDate={emptyDate}
        renderEmptyData={emptyData}
      />
    </SafeArea>
  );
};
