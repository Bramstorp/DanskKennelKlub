import React from "react";
import { Text } from "react-native";
import { DetaiContainer, DetailEventCard } from "../components/calendar-style";
import { Button } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

export const CalendarDetailScreen = ({ route }) => {
  const { calendar } = route.params;

  console.log(calendar);

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
          <Text>Person Navn</Text>
        </Spacer>
      </DetailEventCard>
      <DetaiContainer>
        <Button
          mode="contained"
          color="red"
          onPress={() => console.log("Pressed")}
        >
          Press me
        </Button>
      </DetaiContainer>
    </SafeArea>
  );
};
