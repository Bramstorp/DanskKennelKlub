import React, { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import { DetaiContainer, DetailEventCard } from "../components/calendar-style";
import { Button, Appbar } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { EventsContext } from "../../../services/events/events.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { colors } from "../../../infrastructure/theme/colors";

export const CalendarDetailScreen = ({ route, navigation }) => {
  const { calendar } = route.params;
  const { joinEvents } = useContext(EventsContext);
  const { user } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <Appbar.Header style={{backgroundColor: colors.brand.primary}}>
        <Appbar.BackAction onPress={() => navigation.goBack()}/>
        <Appbar.Content title={calendar.name} subtitle="Dansk Kennel Klub" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
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
          color={colors.brand.primary}
          onPress={() => joinEvents(user, calendar)}
        >
          Deltag Event
        </Button>
      </DetaiContainer>
    </SafeArea>
  );
};
