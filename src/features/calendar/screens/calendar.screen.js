import React, { useEffect, useState, useContext } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';

import { CalendarContext } from "../../../services/calendar/calendar.context";

export const CalendarScreen = () => {
  const { isLoading, date } = useContext(CalendarContext);

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={() => console.log(item.name)}>
        <View >
            <Text>{item.name}</Text>
            <Text>{item.cookies ? `🍪` : `😋`}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const empty = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <Agenda 
        items={date} 
        renderItem={renderItem}
        pastScrollRange={5}
        futureScrollRange={5}
        renderEmptyDate={empty}
      />
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
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});
