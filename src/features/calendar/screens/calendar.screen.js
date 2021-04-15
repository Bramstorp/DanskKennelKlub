import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { EventCard, EmptyDate } from "../components/calendar-style";
import { Agenda } from "react-native-calendars";
import { Text } from "../../../components/typography/text.component";

import * as firebase from "firebase";

export const CalendarScreen = ({ navigation }) => {
  const [date, setDate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const ref = firebase.database().ref("calendar/events");
    ref.once("value").then((snapshot) => {
      let result = {};
      snapshot.forEach((daySnapshot) => {
        result[daySnapshot.key] = [];
        daySnapshot.forEach((eventSnapshot) => {
          result[daySnapshot.key].push(eventSnapshot.val());
        });
      });
      setDate(result)
    });
  }, [])

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
    <SafeArea>
      {!isLoading ? (
        <Agenda
          items={date}
          renderItem={renderItem}
          pastScrollRange={5}
          futureScrollRange={5}
          renderEmptyDate={emptyDate}
          renderEmptyData={emptyData}
          theme={{
            agendaDayTextColor: "red",
            agendaTodayColor: 'red',
            agendaKnobColor: 'red',
            selectedDayBackgroundColor: 'red',
            dotColor: "red",
          }}
        />
      ) : (
        <ActivityIndicator animating={true} color={Colors.blue300} />
      )}
    </SafeArea>
  );
};
