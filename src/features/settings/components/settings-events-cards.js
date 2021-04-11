import React, { useEffect, useState } from "react";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { TouchableOpacity, View } from "react-native";
import { DetailEventCard } from "./settings-events-styles";

export const SettingsEventsCards = ({ events }) => {
  if (!events.length) {
    return null;
  }
  const userEvents = events.map((event) => {
    return (
      <TouchableOpacity>
        <DetailEventCard>
          <Text>
            {event.starttime} - {event.endtime}
          </Text>
          <Spacer size="medium">
            <Text>{event.name}</Text>
          </Spacer>
          <Spacer size="medium">
            <Text>{event.eventName}</Text>
          </Spacer>
        </DetailEventCard>
      </TouchableOpacity>
    );
  });
  return <View>{userEvents}</View>;
};
