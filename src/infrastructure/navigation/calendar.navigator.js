import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { View, Text } from "react-native";

const CalendarStack = createStackNavigator();

function Calendar() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Calendar!</Text>
      </View>
    );
  }

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
        component={Calendar}
      />
    </CalendarStack.Navigator>
  );
};
