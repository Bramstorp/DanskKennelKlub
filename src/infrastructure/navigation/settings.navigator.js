import React from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { SettingsDetailScreen } from "../../features/settings/screens/settings-details.screen"
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="SettingsDetail"
        component={SettingsDetailScreen}
      />
    </SettingsStack.Navigator>
  );
};
