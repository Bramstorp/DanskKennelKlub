import React, { useState } from "react";
import { View, Modal, TouchableHighlight, Text } from "react-native";
import { EventsTextStyle, CancelButton, DoneButton } from "./events.style";

import DateTimePicker from "@react-native-community/datetimepicker";

import moment from "moment";

export const CustomDatePicker = (props) => {
  const { textStyle, defaultDate } = props;
  const [date, setDate] = useState(moment(defaultDate));
  const [show, setShow] = useState(false);

  const onChange = (e, selectedDate) => {
    setDate(moment(selectedDate));
  };

  const onDonePress = () => {
    props.onDateChange(defaultDate);
    setShow(false);
  };

  const onCancelPress = () => {
    setDate(moment(defaultDate));
    setShow(false);
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
                      onChange={onChange}
                      display={"spinner"}
                    />
                  </View>
                  <CancelButton
                    underlayColor={"transparent"}
                    onPress={() => onCancelPress()}
                  >
                    <Text>Cancel</Text>
                  </CancelButton>
                  <DoneButton
                    underlayColor={"transparent"}
                    onPress={() => onDonePress()}
                  >
                    <Text>Done</Text>
                  </DoneButton>
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
  defaultDate: moment(),
  onDateChange: () => {},
};
