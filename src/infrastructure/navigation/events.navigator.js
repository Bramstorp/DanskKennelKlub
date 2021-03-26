import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { EventsScreen } from "../../features/events/screens/events.screen";

const EventsStack = createStackNavigator();

export const EventsNavigator = () => {
  return (
    <EventsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <EventsStack.Screen
        options={{
          header: () => null,
        }}
        name="Events"
        component={EventsScreen}
      />
    </EventsStack.Navigator>
  );
};
