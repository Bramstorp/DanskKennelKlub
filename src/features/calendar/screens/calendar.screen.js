import React, { useContext } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Agenda } from "react-native-calendars";

import { CalendarContext } from "../../../services/calendar/calendar.context";

export const CalendarScreen = ({ navigation }) => {
  const { isLoading, date } = useContext(CalendarContext);

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() =>
          navigation.navigate("CalendarDetail", {
            calendar: item,
          })
        }
      >
        <View>
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const emptyDate = () => {
    return (
      <View style={styles.emptydate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  const emptyData = () => {
    return (
      <View style={styles.emptydate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

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
    backgroundColor: "white",
    margin: 5,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: 100,
  },
  emptydate: {
    backgroundColor: "white",
    margin: 5,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
