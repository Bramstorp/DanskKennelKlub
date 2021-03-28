import React, { useState } from "react";
import {
  View,
  Modal,
  TouchableHighlight,
  Text,
  StyleSheet,
} from "react-native";
import { EventsTextStyle } from "./events.style";

import DateTimePicker from "@react-native-community/datetimepicker";

import moment from "moment";

export const CustomDatePicker = (props) => {
  const { textStyle } = props;
  const [date, setDate] = useState(moment());
  const [show, setShow] = useState(false);

  const onChange = (e, selectedDate) => {
    setDate(moment(selectedDate));
  };

  return (
    <TouchableHighlight activeOpacity={0} onPress={() => setShow(true)}>
      <View>
        <EventsTextStyle>{date.format("MMMM DD YYYY")}</EventsTextStyle>
        <Modal
          transparent={true}
          animationType="slide"
          visible={show}
          supportedOrientations={["portrait"]}
          onRequestClose={() => setShow(false)}
        >
          <View style={{ flex: 1 }}>
            <TouchableHighlight
              style={{
                flex: 1,
                alignItems: "flex-end",
                flexDirection: "row",
              }}
              activeOpacity={1}
              visible={show}
              onPress={() => setShow(false)}
            >
              <TouchableHighlight
                underlayColor={"#FFFFFF"}
                style={{
                  flex: 1,
                  borderTopColor: "#E9E9E9",
                  borderTopWidth: 1,
                }}
                onPress={() => console.log("datepricker clicked")}
              >
                <View
                  style={{
                    backgroundColor: "#FFFFFF",
                    height: 256,
                    overflow: "hidden",
                  }}
                >
                  <View style={{ marginTop: 20 }}>
                    <DateTimePicker
                      timeZoneOffsetInMinutes={0}
                      value={new Date(date)}
                      mode="date"
                      minimumDate={
                        new Date(
                          moment().subtract(120, "years").format("YYYY-MM-DD")
                        )
                      }
                      maximumDate={new Date(moment().format("YYYY-MM-DD"))}
                      onChange={onChange}
                      display={"spinner"}
                    />
                  </View>

                  <TouchableHighlight
                    underlayColor={"transparent"}
                    onPress={() => console.log("cancelled")}
                    styles={[styles.btnText, styles.btnCancel]}
                  >
                    <Text>Cancel</Text>
                  </TouchableHighlight>
                </View>
              </TouchableHighlight>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
    </TouchableHighlight>
  );
};

CustomDatePicker.defaultProps = {
  textStyle: {},
};

const styles = StyleSheet.create({
  btnText: {
    position: "absolute",
    top: 0,
    height: 42,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnCancel: {
    left: 0,
  },
  btnDone: {
    right: 0,
  },
});
