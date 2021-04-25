import React from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { TouchableOpacity, View } from "react-native";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { DetailEventCard, Loading } from "./settings-events-styles";

export const SettingsEventsCards = ({ events, loading, navigation }) => {
  if (!events.length) {
    return null;
  }
  const userEvents = events.map((event) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("SettingsDetail", {
            events: event,
          })
        }
      >
        {!loading ? (
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
        ) : (
          <Loading>
            <ActivityIndicator animating={true} color={Colors.blue300} />
          </Loading>
        )}
      </TouchableOpacity>
    );
  });
  return (
    <View>
      {userEvents}
    </View>
  )
};
