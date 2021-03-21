import {addDays, format} from 'date-fns';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Agenda} from 'react-native-calendars';

export const CalendarScreen = () => {
  const [items, setItems] = useState({});

  useEffect(() => {
      const data = {
        '2021-03-21': [{name: 'test 1', cookies: true}],
        '2021-03-22': [{name: 'test 2', cookies: false}],
      }
      setItems(data);
  }, []);

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
      <Agenda items={items} renderItem={renderItem} />
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
