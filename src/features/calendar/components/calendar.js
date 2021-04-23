import React, { useState, useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";

import { Agenda } from "react-native-calendars";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { EventCard, EmptyDate } from "../components/calendar-style";

import * as firebase from "firebase";

export const Calendar = ({ navigation }) => {
  const [date, setDate] = useState([]);
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true)
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
        setLoading(false);
      });
    }, [date.date])
  );

  const renderItem = (date) => {
    return (
        <TouchableOpacity
        onPress={() =>
          navigation.navigate("CalendarDetail", {
            calendar: date,
          })
        }
      >
        {!loading ? (
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
      
      ) : (
        <ActivityIndicator animating={true} color={Colors.blue300} />
      )}
      </TouchableOpacity>
    )
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
