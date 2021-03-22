import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { CalendarScreen } from "../../features/calendar/screens/calendar.screen";
import { CalendarDetailScreen } from "../../features/calendar/screens/calendar-details.screen";

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
      <CalendarStack.Screen
        options={{
          header: () => null,
        }}
        name="CalendarDetail"
        component={CalendarDetailScreen}
      />
    </CalendarStack.Navigator>
  );
};
