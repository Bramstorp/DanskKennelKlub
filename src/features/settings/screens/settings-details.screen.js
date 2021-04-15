import React, { useContext, useEffect, useState } from "react";
import { Appbar } from 'react-native-paper';
import { Text } from "react-native";
import { DetailEventCard, CancelBtn} from "../components/settings-events-styles";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AntDesign } from '@expo/vector-icons'; 

import { EventsContext } from "../../../services/events/events.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { colors } from "../../../infrastructure/theme/colors";

export const SettingsDetailScreen = ({ route, navigation }) => {
  const { events } = route.params;
  const { removeEventFromUser } = useContext(EventsContext);
  const { user } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <Appbar.Header style={{ backgroundColor: colors.brand.primary }}>
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
        <CancelBtn>
          <AntDesign
            name="closecircleo"
            size={30}
            color={colors.brand.primary}
            onPress={() => removeEventFromUser(user, events)}
          />
        </CancelBtn>
      </DetailEventCard>
    </SafeArea>
  );
};
