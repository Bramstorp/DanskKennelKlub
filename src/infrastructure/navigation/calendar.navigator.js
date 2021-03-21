import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { View, Text } from "react-native";

import { CalendarScreen } from "../../features/calendar/screens/calendar.screen";

const CalendarStack = createStackNavigator();

export const CalendarNavigator = ({ route, navigation }) => {
  return (
    <CalendarStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <CalendarStack.Screen
        options={{
          header: () => null,
        }}
        name="Calendar"
        component={CalendarScreen}
      />
    </CalendarStack.Navigator>
  );
};
