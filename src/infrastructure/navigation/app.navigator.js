import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { HomeNavigator } from "./home.navigator";
import { CalendarNavigator } from "./calendar.navigator";
import { SettingsNavigator } from "./settings.navigator";
import { EventsNavigator } from "./events.navigator";

import { CalendarContextProvider } from "../../services/calendar/calendar.context";
import { EventsContextProvider } from "../../services/events/events.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Homescreen: "md-home",
  Calendar: "md-calendar",
  Account: "md-person",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <CalendarContextProvider>
    <EventsContextProvider>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Homescreen" component={HomeNavigator} />
        <Tab.Screen name="Calendar" component={CalendarNavigator} />
        <Tab.Screen name="Account" component={SettingsNavigator} />
        <Tab.Screen name="Events" component={EventsNavigator} />
      </Tab.Navigator>
    </EventsContextProvider>
  </CalendarContextProvider>
);
