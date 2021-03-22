import React, { useEffect, useState, useContext } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card, Avatar } from 'react-native-paper';
import { Agenda } from 'react-native-calendars';

import { CalendarContext } from "../../../services/calendar/calendar.context";

export const CalendarScreen = () => {
  const { isLoading, date } = useContext(CalendarContext);

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
      <Card>
        <Card.Content>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text>{item.name}</Text>
            <Avatar.Text label="J" />
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
    );
  };

  const emptyDate = () => {
    return (
      <View style={styles.emptydate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  const emptyData = () => {
    return (
      <View style={styles.emptydate}>
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
        renderEmptyDate={emptyDate}
        renderEmptyData={emptyData}
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
  emptydate: {
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
