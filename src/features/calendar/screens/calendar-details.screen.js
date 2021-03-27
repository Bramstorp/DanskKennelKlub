import React, { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import { DetaiContainer, DetailEventCard } from "../components/calendar-style";
import { Button } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { CalendarContext } from "../../../services/calendar/calendar.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context.js";

import * as firebase from "firebase";

export const CalendarDetailScreen = ({ route }) => {
  const { calendar } = route.params;
  const { user } = useContext(AuthenticationContext);

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

  return (
    <SafeArea>
      <DetailEventCard>
        <Text>
          {calendar.starttime} - {calendar.endtime}
        </Text>
        <Spacer size="medium">
          <Text>{calendar.name}</Text>
        </Spacer>
        <Spacer size="medium">
          <Text>test</Text>
        </Spacer>
      </DetailEventCard>
      <DetaiContainer>
        <Button
          mode="contained"
          color="red"
          onPress={() => setEvents(calendar.date, calendar.name, events)}
        >
          Deltag Event
        </Button>
      </DetaiContainer>
    </SafeArea>
  );
};
