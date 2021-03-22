import React, { useEffect, useState, useContext } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Agenda } from 'react-native-calendars';

import { CalendarContext } from "../../../services/calendar/calendar.context";

export const CalendarScreen = () => {
  const { isLoading, date } = useContext(CalendarContext);

  const renderItem = (item) => {
    return (
      <View style={styles.itemContainer}>
        <Text>{item.name}</Text>
        <Text>{item.cookies ? `🍪` : `😋`}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Agenda items={date} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
