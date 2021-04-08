import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { HomeScreen } from "../../features/home/screens/home.screen";

const HomeStack = createStackNavigator();

export const HomeNavigator = ({ route, navigation }) => {
  return (
    <HomeStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <HomeStack.Screen
        options={{
          header: () => null,
        }}
        name="Home"
        component={HomeScreen}
      />
    </HomeStack.Navigator>
  );
};
