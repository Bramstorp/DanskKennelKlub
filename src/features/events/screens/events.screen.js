import React, { useContext, useEffect } from "react";
import { Text } from "react-native";
import { Button } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { CalendarContext } from "../../../services/calendar/calendar.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context.js";

export const EventsScreen = ({ route }) => {
  const { setEvent } = useContext(CalendarContext);
  const { user } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <Text>test</Text>
      <Spacer size="medium">
        <Text>test</Text>
      </Spacer>
      <Spacer size="medium">
        <Text>test</Text>
      </Spacer>
      <Button mode="contained" color="red" onPress={() => console.log("test")}>
        Opret Event
      </Button>
    </SafeArea>
  );
};
