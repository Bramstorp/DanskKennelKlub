import React, { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import { DetaiContainer, DetailEventCard } from "../components/calendar-style";
import { Button } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { EventsContext } from "../../../services/events/events.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const CalendarDetailScreen = ({ route }) => {
  const { calendar } = route.params;
  const { joinEvents } = useContext(EventsContext);
  const { user } = useContext(AuthenticationContext);

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
          <Text>{calendar.eventName}</Text>
        </Spacer>
      </DetailEventCard>
      <DetaiContainer>
        <Button
          mode="contained"
          color="red"
          onPress={() => joinEvents(user, calendar)}
        >
          Deltag Event
        </Button>
      </DetaiContainer>
    </SafeArea>
  );
};
