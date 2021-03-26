import React, { useContext, useEffect } from "react";
import { Text } from "react-native";
import { DetaiContainer, DetailEventCard } from "../components/calendar-style";
import { Button } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { CalendarContext } from "../../../services/calendar/calendar.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context.js";

export const CalendarDetailScreen = ({ route }) => {
  const { calendar } = route.params;
  const { setEvent } = useContext(CalendarContext);
  const { user } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <DetailEventCard>
        <Text>
          {calendar.start} - {calendar.end}
        </Text>
        <Spacer size="medium">
          <Text>{calendar.title}</Text>
        </Spacer>
        <Spacer size="medium">
          <Text>{calendar.summary}</Text>
        </Spacer>
      </DetailEventCard>
      <DetaiContainer>
        <Button
          mode="contained"
          color="red"
          onPress={() =>
            setEvent(
              calendar.title,
              calendar.start,
              calendar.end,
              calendar.summary
            )
          }
        >
          Deltag Event
        </Button>
      </DetaiContainer>
    </SafeArea>
  );
};
