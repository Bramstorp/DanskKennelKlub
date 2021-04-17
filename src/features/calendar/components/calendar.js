import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";

import { Agenda } from "react-native-calendars";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { EventCard, EmptyDate } from "../components/calendar-style";

export const Calendar = ({ date, navigation }) => {
  const renderItem = (date) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("CalendarDetail", {
            calendar: date,
          })
        }
      >
        <EventCard>
          <Text>
            {date.starttime} - {date.endtime}
          </Text>
          <Spacer size="medium">
            <Text>{date.name}</Text>
          </Spacer>
          <Spacer size="medium">
            <Text>{date.eventName}</Text>
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
    <Agenda
      items={date}
      renderItem={renderItem}
      pastScrollRange={5}
      futureScrollRange={5}
      renderEmptyDate={emptyDate}
      renderEmptyData={emptyData}
      theme={{
        agendaDayTextColor: "#d9534f",
        agendaTodayColor: "#d9534f",
        agendaKnobColor: "#d9534f",
        selectedDayBackgroundColor: "#d9534f",
        dotColor: "#d9534f",
      }}
    />
  );
};
