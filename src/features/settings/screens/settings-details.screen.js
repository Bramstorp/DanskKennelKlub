import React, { useContext, useEffect, useState } from "react";
import { Appbar } from 'react-native-paper';
import { Text } from "react-native";
import { DetailEventCard } from "../components/settings-events-styles";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";


export const SettingsDetailScreen = ({ route, navigation }) => {
  const { events } = route.params;

  return (
    <SafeArea>
      <Appbar.Header style={{backgroundColor: "red"}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={events.name} subtitle="Dansk Kennel Klub" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <DetailEventCard>
        <Text>
          {events.starttime} - {events.endtime}
        </Text>
        <Spacer size="medium">
          <Text>{events.name}</Text>
        </Spacer>
        <Spacer size="medium">
          <Text>{events.eventName}</Text>
        </Spacer>
      </DetailEventCard>
    </SafeArea>
  );
};
